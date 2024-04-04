import { createSelector } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../coreTypes'
import type { RootState } from '../setupStore'

import { layuoutAdapter } from './initialState'

const { selectAll, selectById } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)

export const getFormConstructor = (state: RootState): IFormConstructor => state.formConstructor

export const getAllFormElements = (state: RootState): (IFormElement | IGroupElement)[] =>
  selectAll(state)

export const getSelectedPageId = (state: RootState): string => state.formConstructor.selectedPageId

export const getElementsOnLayer = (parentId: string) =>
  createSelector([selectAll], element => {
    return element
      .filter(el => {
        return el.parentId === parentId
      })
      .sort((el1, el2) => el1.order - el2.order)
  })
export const getFormElAsMap = (state: RootState): Map<string, IFormElement | IGroupElement> => {
  const map = new Map<string, IFormElement | IGroupElement>()
  selectAll(state).forEach(el => {
    map.set(el.id, el)
  })
  return map
}
export const getElementById = (id?: string) => (state: RootState) =>
  id ? selectById(state, id) : null
