import type { IFormConstructor } from '../../../coreTypes'

export const HISTORY_LIMIT = 64

export const popHistory = (state: IFormConstructor) => {
  state.history.pop()

  if (state.history.length) {
    const savePointToUse = state.history.at(-1)

    if (savePointToUse) {
      //надо обдумать откат
      // state.allElementsMap = new Map(savePointToUse.allElementsMap)
      // state.allElementsTree = new Map(savePointToUse.allElementsTree)
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
