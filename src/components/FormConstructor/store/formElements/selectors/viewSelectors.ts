import { createSelector } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'
import type { RootState } from '../../setupStore'
import { selectViewAll, selectViewById } from '../adapters'

export const getFormConstructor = (state: RootState): IFormConstructor => state.formConstructor

export const getAllFormElements = (state: RootState): (IFormElement | IGroupElement)[] =>
  selectViewAll(state)

export const getSelectedView = (state: RootState) => {
  return state.formConstructor.selectedView
}

export const getSelectedPageId = (state: RootState): string => state.formConstructor.selectedPageId

export const getElementsOnLayer = (parentId: string) =>
  createSelector([selectViewAll], element => {
    return element
      .filter(el => {
        return el.parentId === parentId
      })
      .sort((el1, el2) => el1.order - el2.order)
  })
export const getFormElAsMap = (state: RootState): Map<string, IFormElement | IGroupElement> => {
  const map = new Map<string, IFormElement | IGroupElement>()
  selectViewAll(state).forEach(el => {
    map.set(el.id, el)
  })
  return map
}
export const getElementById = (id?: string) => (state: RootState) =>
  id ? selectViewById(state, id) : null

export const sameInstanceElementsIdsSelector = (state: RootState) => {
  return new Set(state.formConstructor.sameInstanceElementsIds)
}

export const elementToCopyIdSelector = (state: RootState) => state.formConstructor.elementToCopyId

export const getSiblingsCount = (state: RootState, parentId: string) => {
  const allElements: (IFormElement | IGroupElement)[] = selectViewAll(state)
  let elements = 0
  allElements.forEach(element => {
    if (element.parentId === parentId) {
      elements++
    }
  })
  return elements
}
