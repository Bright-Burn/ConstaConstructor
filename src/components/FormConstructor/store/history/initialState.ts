import { IHistory } from './types'

export const HISTORY_LIMIT = 64

export const initialHistory: IHistory = {
  history: [],

  savePointToUse: null,
}

