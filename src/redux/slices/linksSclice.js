import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchLinks = createAsyncThunk(
    'links/fetchLinks',
    async (url) => {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      return await response.json();
    },
);

const linksSlice = createSlice({
  name: 'links',
  initialState: {
    loading: 'idle',
    error: null,
    shortLink: null,
    shortedLinks: [],
  },
  reducers: {
    addLink: (state, action) => {
      console.log(state)
      state.shortedLinks?.push(action.payload)
      console.log(state.shortedLinks)
    }
  },
  extraReducers: {
    [fetchLinks.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchLinks.fulfilled]: (state, action) => {
      state.shortLink = action.payload;
      state.loading = 'idle';
    },
    [fetchLinks.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = 'failed';
    },
  },
});

export default linksSlice.reducer;

export const getLoadingStatus = (state) => state.links.loading;
export const getState = (state) => state.links;

export const {addLink} = linksSlice.actions;

