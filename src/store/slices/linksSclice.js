import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { uniqBy } from 'lodash'
import shortenApi from 'api/shortenApi'
import reportError from '../../utils/reportError'

export const shorten = createAsyncThunk(
  'links/shorten',
  async (url) => {
    return await shortenApi(url)
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
      state.items = state.items.filter(({ id }) => id !== payload)
    },
  },
  extraReducers: {
    [shorten.pending]: (state) => {
      state.loading = 'loading'
    },
    [shorten.fulfilled]: (state, action) => {
      const { payload: { result } } = action
      const short = result.short_link2
      const longLink = result.original_link
      const id = result.code
      const items = [{ short, longLink, id }, ...state.items]
      state.items = uniqBy(items, 'id')
      state.loading = 'success'
      state.error = null
    },
    [shorten.rejected]: (state, action) => {
      state.error = action.error
      state.loading = 'failed'
      reportError(action.error)
    },
  },
})

export default linksSlice.reducer

export const { remove } = linksSlice.actions
