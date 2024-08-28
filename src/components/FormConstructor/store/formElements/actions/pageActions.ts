import uuid from 'react-uuid'

import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { initialLayout } from '../initialState'

import { addNewFormElement, deleteFormElement } from './elementsStructuresActions'

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
