import { IFormElement, ILayoutElement } from '../store/formElements/types'

export const getNewLayoutParentLevel = (
  currentParentId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, ILayoutElement | IFormElement>,
): string | undefined => {
  if (currentParentId === 'root') {
    return currentParentId
  } else {
    if (allElementsMap.has(currentParentId)) {
      const prevParent = (allElementsMap.get(currentParentId) as ILayoutElement).parentId
      return prevParent
    }
  }
}
