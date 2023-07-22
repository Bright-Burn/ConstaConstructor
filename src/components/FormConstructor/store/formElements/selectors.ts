import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../setupStore'
import { layuoutAdapter } from './initialState'
import { IFormConstructor, IFormElement, IGroupElement } from './types'

const { selectAll, selectById, selectIds } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)

export const getFormConstructor = (state: RootState): IFormConstructor => state.formConstructor
export const getAllElements = (state: RootState): (IFormElement | IGroupElement)[] => {
  const { selectAll } = layuoutAdapter.getSelectors<RootState>(
    state => state.formConstructor.allElements,
  )
  return selectAll(state)
}
export const getSelectedPageId = (state: RootState): string => state.formConstructor.selectedPageId

export const getElementsOnLayer = (parentId: string) =>
  createSelector([selectAll], element => {
    return element.filter(el => {
      return el.parentId === parentId
    })
  })
export const getTreeData = (state: RootState): Map<string, IFormElement | IGroupElement> => {
  const map = new Map()
  selectAll(state).forEach(el => map.set(el.id, el))
  return map
}
