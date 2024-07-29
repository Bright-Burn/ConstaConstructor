import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../coreTypes'

/**
 * Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок
 */
export const deepCopyElements = (
  allElements: (IFormElement | IGroupElement)[],
): (IFormElement | IGroupElement)[] => {
  const parentIdElemMap = new Map<string, (IGroupElement | IFormElement)[]>()
  const allElementsMap = new Map<string, IGroupElement | IFormElement>()

  allElements.forEach(el => {
    if (el.parentId && parentIdElemMap.get(el.parentId)) {
      parentIdElemMap.set(el.parentId, [...(parentIdElemMap.get(el.parentId) ?? []), el])
    } else if (el.parentId) {
      parentIdElemMap.set(el.parentId, [el])
    }
  })
  allElements.forEach(el => {
    allElementsMap.set(el.id, el)
  })

  allElements.forEach(el => {
    const parentEl = parentIdElemMap.get(el.id)
    const currElement = allElementsMap.get(el.id)

    if (currElement) {
      const newEl = { ...currElement, id: uuid() }
      allElementsMap.set(currElement.id, newEl)
      if (parentEl) {
        parentEl.forEach(el => {
          const fromAllMap = allElementsMap.get(el.id)
          fromAllMap && allElementsMap.set(el.id, { ...fromAllMap, parentId: newEl.id })
        })
      }
    }
  })

  return Array.from(allElementsMap.values())
}
