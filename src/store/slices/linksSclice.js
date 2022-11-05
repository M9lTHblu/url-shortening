import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'

export const shorten = createAsyncThunk(
  'links/shorten',
  async (url) => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    return await response.json()
  },
)

const linksSlice = createSlice({
  name: 'links',
  initialState: {
    error: null,
    items: [],
    loading: 'idle',
  },
  reducers: {
    remove: (state, { payload }) => {
      state.items = state.items.filter(({ code }) => code !== payload)
    },
  },
  extraReducers: {
    [shorten.pending]: (state) => {
      state.loading = 'loading'
    },
    [shorten.fulfilled]: (state, action) => {
      if (action.payload.ok) {
        const { short_link2, original_link, code } = action.payload.result
        const items = [{ short_link2, original_link, code }, ...state.items]
        console.log(items)
        state.items = uniqBy(items, 'code')
        state.loading = 'idle'
      }
    },
    [shorten.rejected]: (state, action) => {
      state.error = action.error
      state.loading = 'failed'
    },
  },
})

export default linksSlice.reducer

export const getLinks = (state) => state.links
export const { remove } = linksSlice.actions
