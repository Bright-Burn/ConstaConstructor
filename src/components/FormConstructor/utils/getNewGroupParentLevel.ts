import { IFormElement, IGroupElement } from '../store/formElements/types'

export const getNewGroupParentLevel = (
  currentParentId: string,
  allElementsMap: Map<string, IGroupElement | IFormElement>,
): string | undefined => {
  if (currentParentId === 'root') {
    return currentParentId
  } else {
    if (allElementsMap.has(currentParentId)) {
      const prevParent = (allElementsMap.get(currentParentId) as IGroupElement).parentId
      return prevParent
    }
  }
}
