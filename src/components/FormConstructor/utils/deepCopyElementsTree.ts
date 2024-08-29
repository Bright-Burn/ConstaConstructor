import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../coreTypes'

/**
 * Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок
 */
export const deepCopyElements = (allElements: (IFormElement | IGroupElement)[]) => {
  const parentIdElemMap = new Map<string, (IGroupElement | IFormElement)[]>()
  const allElementsMap = new Map<string, IGroupElement | IFormElement>()
  // Структура для сохранения взаимосвязей старый id - новый id
  const prevIdNewIdDict: Record<string, string> = {}

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
      const newId = uuid()
      const newEl = { ...currElement, id: newId }
      prevIdNewIdDict[currElement.id] = newId
      allElementsMap.set(currElement.id, newEl)
      if (parentEl) {
        parentEl.forEach(el => {
          const fromAllMap = allElementsMap.get(el.id)
          fromAllMap && allElementsMap.set(el.id, { ...fromAllMap, parentId: newEl.id })
        })
      }
    }
  })

  const newViews = Array.from(allElementsMap.values())

  return {
    newViews,
    prevIdNewIdDict,
  }
}
