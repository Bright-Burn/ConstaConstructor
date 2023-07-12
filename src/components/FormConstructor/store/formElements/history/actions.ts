import { ISavePoint } from './types'

export interface HistoryPush {
  savePoint: ISavePoint
}

export interface LoadFromSavePoint {
  savePoint: ISavePoint
}

