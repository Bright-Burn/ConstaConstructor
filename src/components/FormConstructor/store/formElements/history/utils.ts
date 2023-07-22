import { IFormConstructor } from '../types'
import { HISTORY_LIMIT } from './reducers'
import { ISavePoint } from './types'

export const pushHistory = (state: IFormConstructor) => {
  // const savePoint: ISavePoint = {
  //   // allElementsMap: new Map(state.allElementsMap),
  //   // allElementsTree: new Map(state.allElementsTree),
  //   pages: [...state.pages],
  //   numberOfPages: state.numberOfPages,
  //   selectedElement: state.selectedElement != null ? { ...state.selectedElement } : null,
  //   selectedElementProps:
  //     state.selectedElementProps != null ? { ...state.selectedElementProps } : null,
  // }
  // const newHistory = [...state.history, savePoint]
  // if (state.history.length > HISTORY_LIMIT) {
  //   state.history = [...newHistory.slice(1)]
  // } else {
  //   state.history = [...newHistory]
  // }
}
