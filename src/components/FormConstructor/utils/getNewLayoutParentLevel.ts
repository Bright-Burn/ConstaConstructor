import { IFormElement, ILayoutElement } from '../store/formElements/types'

// В случае, если мы переносим новый Layout элемент (a) в пустой Layout(b), то новый переносится в родиельский Layout элемента (b)
// Это нужно чтобы вновь перенесенный Layout не занимал всю первхность, а происходило деление поровну
export const getNewLayoutParentLevel = (
  currentParentId: string,
  allElementsTree: Map<string, (ILayoutElement | IFormElement)[]>,
  allElementsMap: Map<string, ILayoutElement | IFormElement>,
): string | undefined => {
  if (currentParentId === 'root' || allElementsTree.get(currentParentId)?.length) {
    return currentParentId
  } else {
    if (allElementsMap.has(currentParentId)) {
      const prevParent = (allElementsMap.get(currentParentId) as ILayoutElement).parentId
      return getNewLayoutParentLevel(prevParent, allElementsTree, allElementsMap)
    }
  }
}
