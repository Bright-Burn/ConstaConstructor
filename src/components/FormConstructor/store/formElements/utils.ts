import { IFormElement, IGroupElement } from './types'

export const deleteElementFromTree = (
  elementId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IGroupElement | IFormElement>,
) => {
  const deleteChildren = (elementId: string) => {
    const childrenIds = allElementsTree.get(elementId)
    if (childrenIds) {
      childrenIds.forEach(child => {
        deleteChildren(child)
      })
    }
    allElementsMap.delete(elementId)
    allElementsTree.delete(elementId)
  }

  deleteChildren(elementId)
}

