import {
  FormElementArray,
  FormElementTypes,
  IFormElement,
  ILayoutElement,
} from '../store/formElements/types'

// В случае, если мы переносим новый Layout элемент (a) в пустой Layout(b), то новый переносится в родиельский Layout элемента (b)
// Это нужно чтобы вновь перенесенный Layout не занимал всю первхность, а происходило деление поровну
export const getNewLayoutParentLevel = (
  currentParentId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, ILayoutElement | IFormElement>,
): string | undefined => {
  const elemsOnLayerIds = allElementsTree.get(currentParentId)
  let elemsOnLayerExist = false
  elemsOnLayerIds?.forEach(el => {
    const element = allElementsMap.get(el)
    if (element && FormElementArray.includes(element.type as FormElementTypes)) {
      elemsOnLayerExist = true
    }
  })
  if (currentParentId === 'root' || elemsOnLayerExist) {
    return currentParentId
  } else {
    if (allElementsMap.has(currentParentId)) {
      const prevParent = (allElementsMap.get(currentParentId) as ILayoutElement).parentId
      return getNewLayoutParentLevel(prevParent, allElementsTree, allElementsMap)
    }
  }
}
