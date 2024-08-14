import { createSelector } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../coreTypes'
import type { RootState } from '../setupStore'

import { layuoutAdapter } from './initialState'
import { ITreeItem } from '../../FormConstructorFormBlockConfigure/Panels/ComponentsStructure/ComponentTree/Tree'

const { selectAll, selectById } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)

export const getFormConstructor = (state: RootState): IFormConstructor => state.formConstructor

export const getAllFormElements = (state: RootState): (IFormElement | IGroupElement)[] =>
  selectAll(state)

export const selectedElementSelector = (state: RootState) => {
  return state.formConstructor.selectedElement
}

export const getSelectedPageId = (state: RootState): string => state.formConstructor.selectedPageId

export const selectedPageIdSelector = createSelector([getSelectedPageId], selectedPage => {
  return selectedPage
})

export const pagesSelector = (state: RootState) => {
  return state.formConstructor.pages
}

export const getAllFormElementsSelector = createSelector([selectAll], elements => {
  return elements
})

export const getElementsOnLayer = (parentId: string) =>
  createSelector([selectAll], element => {
    return element
      .filter(el => {
        return el.parentId === parentId
      })
      .sort((el1, el2) => el1.order - el2.order)
  })

export const getFormElAsMap = createSelector([selectAll], elements => {
  const map = new Map<string, IFormElement | IGroupElement>()
  elements.forEach(el => {
    map.set(el.id, el)
  })
  return map
})

/*
  Кэширует данные для отрисовки дерева
*/
export const getElemIdChildrenSelector = createSelector(
  [selectAll, getFormElAsMap, selectedPageIdSelector],
  (allElements, allElementsMap, selectedPageId) => {
    const childrenMap: Map<string, (IFormElement | IGroupElement)[]> = new Map()
    allElements.forEach(el => {
      if (el.parentId) {
        if (!childrenMap.has(el.parentId)) {
          childrenMap.set(el.parentId, [])
        }
        childrenMap.get(el.parentId)!.push(el)
      }
    })

    return getTree(allElementsMap, allElements, selectedPageId, childrenMap)
  },
)

const getTree = (
  allElementsMap: Map<string, IFormElement | IGroupElement>,
  allElements: (IFormElement | IGroupElement)[],
  parentId: string,
  elemIdChildrenMap: Map<string, (IFormElement | IGroupElement)[]>,
) => {
  const childrenIds = elemIdChildrenMap.get(parentId) || []
  const childrenItems: ITreeItem[] = []

  childrenIds.forEach(childId => {
    const title = allElementsMap.get(childId.id)?.type

    if (title) {
      const treeItem: ITreeItem = {
        key: childId.id,
        children: getTree(allElementsMap, allElements, childId.id, elemIdChildrenMap),
        visible: true,
        disableCheckbox: true,
        title,
      }

      childrenItems.push(treeItem)
    }
  })
  return childrenItems
}

export const getElementById = (id?: string) => (state: RootState) =>
  id ? selectById(state, id) : null
