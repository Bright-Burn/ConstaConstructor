import type { IFormElement, IGroupElement } from '../coreTypes'

/**
 * Возвращет все поддерево элементов для передаваемого элемента
 * @param element Выбранный элемент
 * @param allElements Список всех элементов
 * @returns Поддерево всех элементов
 */
export const getAllChildrenElements = (
  element: IFormElement | IGroupElement,
  allElements: (IGroupElement | IFormElement)[],
) => {
  // Создает карту для хранения связи id родительского элемента - элемент
  const parentIdChildMap = getParentIdChildMap(allElements)
  // Строим поддерево
  const subTree = getAllChildrenTree(element, parentIdChildMap)
  return subTree
}

/**
 * Создает карту для хранения связи id родительского элемента - элемент
 * @param allElements Список элементов
 * @returns Карту для хранения связи id родительского элемента - элемент
 */
const getParentIdChildMap = (allElements: (IGroupElement | IFormElement)[]) => {
  // Создаем карту для хранения связи id родительского элемента - элемент
  const parentElementIdElemMap = new Map<string, (IGroupElement | IFormElement)[]>()
  // Заполняем карту связей id родительского элемента - элемент
  allElements.forEach(el => {
    if (el.parentId && parentElementIdElemMap.get(el.parentId)) {
      parentElementIdElemMap.set(el.parentId, [
        ...(parentElementIdElemMap.get(el.parentId) ?? []),
        el,
      ])
    } else if (el.parentId) {
      parentElementIdElemMap.set(el.parentId, [el])
    }
  })
  return parentElementIdElemMap
}

/**
 * Строит поддерево элементов на основе карты хранения связи id родительского элемента - элемент
 * @param parent Текущая вершина
 * @param parentElementIdElemMap Карта хранения связи id родительского элемента - элемент
 * @returns Поддерево элементов
 */
const getAllChildrenTree = (
  parent: IFormElement | IGroupElement,
  parentElementIdElemMap: Map<string, (IFormElement | IGroupElement)[]>,
) => {
  let subElements: (IFormElement | IGroupElement)[] = []
  const arrForDelete = parentElementIdElemMap.get(parent.id)

  arrForDelete?.forEach(el => {
    if (parentElementIdElemMap.get(el.id)) {
      subElements = [...subElements, ...getAllChildrenTree(el, parentElementIdElemMap)]
    }

    subElements.push(el)
  })

  return subElements
}
