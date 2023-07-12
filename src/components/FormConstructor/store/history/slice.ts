import {
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit'
import { IHistory, ISavePoint } from './types'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { HISTORY_LIMIT, initialHistory } from './initialState'
import { AppDispatch, RootState } from '../setupStore'

const createFormConstructorSlice = <Reducers extends SliceCaseReducers<IHistory>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IHistory
  reducers: ValidateSliceCaseReducers<IHistory, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const historySlice = createFormConstructorSlice({
  name: 'history',
  initialState: initialHistory,
  reducers: {
    push: (state: IHistory, action: PayloadAction<ISavePoint>) => {
      const newHistory = [...state.history]

      newHistory.push(action.payload)
      state.savePointToUse = { ...action.payload }

      if (state.history.length > HISTORY_LIMIT) {
        state.history = [...newHistory.slice(1)]
      } else {
        state.history = [...newHistory]
      }
      console.log(newHistory.length)
    },
    pop: (state: IHistory) => {
      const newHistory = [...state.history]
      const savePointToUse = newHistory.pop()
      state.history = [...newHistory]
      if (savePointToUse) {
        state.savePointToUse = { ...savePointToUse }
      } else {
        state.savePointToUse = null
      }
    },
  },
})

export const historyReducer = historySlice.reducer

export const useHistoryDispatch = () => useDispatch<AppDispatch>()
export const useHistorySelector: TypedUseSelectorHook<RootState> = useSelector

