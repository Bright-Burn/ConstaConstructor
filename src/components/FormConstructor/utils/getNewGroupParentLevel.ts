import { IFormElement, IGroupElement } from '../store/formElements/types'

export const getNewGroupParentLevel = (
  currentParentId: string,
  allElementsMap: Map<string, IGroupElement | IFormElement>,
  allElementsTree: Map<string, string[]>,
): string | undefined => {
  if (currentParentId === 'root') {
    return currentParentId
  } else {
    if (allElementsMap.has(currentParentId)) {
      const groupElement = allElementsMap.get(currentParentId) as IGroupElement
      let prevParent: string | undefined = undefined

      for (let [parentId, childrenIds] of allElementsTree) {
        if (childrenIds.includes(groupElement.id)) {
          prevParent = parentId
          break
        }
      }

      return prevParent
    }
  }
}
