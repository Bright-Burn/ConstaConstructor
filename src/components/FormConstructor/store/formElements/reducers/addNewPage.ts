import uuid from 'react-uuid'
import { IFormConstructor, ILayoutElement } from '../types'
import { initialLayout, layuoutAdapter } from '../initialState'
import { pushHistory } from '../history'

export const addNewPage = (state: IFormConstructor) => {
  /// Создаём новый id для дефолтного Layout

  const newPageId = uuid()
  const pageLayout: ILayoutElement = { ...initialLayout, id: uuid(), parentId: newPageId }

  state.pages = [
    ...state.pages,
    {
      id: newPageId,
      name: `Page${state.numberOfPages + 1}`,
    },
  ]
  state.numberOfPages = state.numberOfPages + 1
  layuoutAdapter.addOne(state.allElements, pageLayout)

  pushHistory(state)
}
