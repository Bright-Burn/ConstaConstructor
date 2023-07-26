import { AppDispatch, RootState } from '../setupStore'
import { historySlice } from './historySlice'


export const pushHistoryElement = (payload: () => void) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(historySlice.actions.pushHistoryElement(payload))
}

export const popHistoryElement = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const history = getState().history.historyArr
  const lastEl = history[history.length - 1]
  if (lastEl) {
    dispatch(lastEl)
    dispatch(historySlice.actions.popHistoryElement())
  }
}
