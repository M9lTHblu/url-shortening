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
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchLinks.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchLinks.fulfilled]: (state, action) => {
      if (action.payload.ok) {
        state.items.unshift(action.payload.result);
        state.loading = 'idle';
      }
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

