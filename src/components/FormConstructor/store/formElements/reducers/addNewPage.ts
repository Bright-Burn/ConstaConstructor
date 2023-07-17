import uuid from 'react-uuid'
import { IFormConstructor, IFormElement, IGroupElement, ILayoutElement } from '../types'
import { initialLayout } from '../initialState'
import { pushHistory } from '../history'

export const addNewPage = (state: IFormConstructor) => {
  /// Создаём новый id для дефолтного Layout
  const pageLayout: ILayoutElement = { ...initialLayout, id: uuid() }

  const newPageId = uuid()

  const newTreeMap = new Map<string, string[]>(state.allElementsTree)
  const newAllElementsMap = new Map<string, IGroupElement | IFormElement>(state.allElementsMap)

  newAllElementsMap.set(pageLayout.id, pageLayout)
  newTreeMap.set(newPageId, [pageLayout.id])

  state.pages = [
    ...state.pages,
    {
      id: newPageId,
      name: `Page${state.numberOfPages + 1}`,
    },
  ]
  state.numberOfPages = state.numberOfPages + 1
  state.allElementsMap = newAllElementsMap
  state.allElementsTree = newTreeMap

  pushHistory(state)
}

