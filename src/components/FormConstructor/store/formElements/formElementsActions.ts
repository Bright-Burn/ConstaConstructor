import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../coreTypes'
import type { AppDispatch, RootState } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'
import { initialLayout, layuoutAdapter } from './initialState'
import { addNewFormElement, deleteFormElement } from './instanceElements'
import { selectAll, selectById } from './layoutAdapterSelectors'
import type { SetNewElementDraggableElem } from './payload'

export const deletePage =
  (pageId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (getState().formConstructor.pages.length > 1) {
      dispatch(formConstructorSlice.actions.deletePage({ id: pageId }))
      dispatch(deleteFormElement(pageId))
    }
  }

export const addNewPage = () => (dispatch: AppDispatch) => {
  const newPageId = uuid()
  const layoutElement = { ...initialLayout, id: uuid(), parentId: newPageId }

  dispatch(addNewFormElement([{ element: layoutElement, newParentElementId: newPageId }]))
  dispatch(formConstructorSlice.actions.addNewPage({ newPageId }))
}

export const changeActivePage = (pageId: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.changeActivePage({ id: pageId }))
}

export const changePageName = (pageName: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.changePageName({ pageName }))
}

export const setDraggableElement = (el: SetNewElementDraggableElem) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setDraggableElement(el))
}

export const getSiblingsCount = (state: RootState, parentId: string) => {
  const allElements: (IFormElement | IGroupElement)[] = selectAll(state)
  let elements = 0
  allElements.forEach(element => {
    if (element.parentId === parentId) {
      elements++
    }
  })
  return elements
}

export const updateGroupFormElementLabel =
  (label: string, elId: string) => (dispatch: AppDispatch) => {
    dispatch(
      formConstructorSlice.actions.updateFormElements({
        id: elId,
        changes: { label },
      }),
    )
  }
