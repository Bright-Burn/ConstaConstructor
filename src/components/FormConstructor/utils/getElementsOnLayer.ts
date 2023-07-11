import { IFormElement, IGroupElement } from "../store/formElements"

export const getElementsOnLayer = (parentElementId: string, allElementsTree: Map<string, string[]>, allElementsMap: Map<string, IFormElement | IGroupElement>) => {
    /// Подгружаем все эелементы на текущем уровне
    const layerIds = allElementsTree.get(parentElementId) || []
    const elementsOnLayer: (IFormElement | IGroupElement)[] = []
    layerIds.forEach(ids => {
      const elem = allElementsMap.get(ids)
      elem && elementsOnLayer.push(elem)
    })

    return elementsOnLayer
}
