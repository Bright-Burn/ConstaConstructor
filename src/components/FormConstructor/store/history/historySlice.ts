import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type historyType = {
  historyArr: Array<() => void>
}
const initialState: historyType = {
  historyArr: [],
}
const maxHistorySize = 50

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    pushHistoryElement: (state, action: PayloadAction<() => void>) => {
      state.historyArr.push(action.payload)
      if (state.historyArr.length > maxHistorySize) {
        state.historyArr.shift()
      }
    },
    popHistoryElement: state => {
      state.historyArr.pop()
    },
  },
})
