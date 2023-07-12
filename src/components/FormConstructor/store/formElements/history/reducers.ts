import { IFormConstructor } from '../types'

export const HISTORY_LIMIT = 256

export const popHistory = (state: IFormConstructor) => {
  const newHistory = [...state.history]

  newHistory.pop()
  state.history = [...newHistory]

  if (newHistory.length) {
    const savePointToUse = newHistory.at(-1)

    if (savePointToUse) {
      state.allElementsMap = new Map(savePointToUse.allElementsMap)
      state.allElementsTree = new Map(savePointToUse.allElementsTree)
      state.numberOfPages = savePointToUse.numberOfPages
      state.pages = [...savePointToUse.pages]
      state.selectedElement =
        savePointToUse.selectedElement != null ? { ...savePointToUse.selectedElement } : null
      state.selectedElementProps =
        savePointToUse.selectedElementProps != null
          ? { ...savePointToUse.selectedElementProps }
          : null
    }
  }
}





