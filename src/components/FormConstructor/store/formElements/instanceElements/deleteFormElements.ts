import type { IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { selectAll, selectById } from '../layoutAdapterSelectors'

import type { ChangeElementLinkCountPayload } from './types'

const deleteElementFormById = (id: string, state: RootState) => {
  // Функция для удаления элемента по id из состояния
  // Создаем карту для хранения связи id родительского элемента - элемент
  const parentElementIdElemMap = new Map<string, (IGroupElement | IFormElement)[]>()
  // Получаем элемент для удаления по id
  const elementForDelete = selectById(state, id)
  // Если элемент для удаления не найден, возвращаем пустые массивы
  if (!elementForDelete) {
    return {
      elementsForDelete: [],
      instancReferencesToDelete: [],
    }
  }
  // Получаем все элементы из состояния
  const allElements = selectAll(state)
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
  // Рекурсивно получаем список всех элементов для удаления, включая вложенные элементы

  const getElementsForDelete = (parent: IFormElement | IGroupElement) => {
    let elemsForDelete: (IFormElement | IGroupElement)[] = []
    const arrForDelete = parentElementIdElemMap.get(parent.id)

    arrForDelete?.forEach(el => {
      if (parentElementIdElemMap.get(el.id)) {
        elemsForDelete = [...elemsForDelete, ...getElementsForDelete(el)]
      }

      elemsForDelete.push(el)
    })

    return elemsForDelete
  }
  // Формируем список элементов для удаления
  const elementsForDelete = [elementForDelete, ...getElementsForDelete(elementForDelete)]
  // Формируем список ссылок на инстансы для удаления
  const instancReferencesToDelete: ChangeElementLinkCountPayload[] = elementsForDelete.map(
    element => {
      return {
        id: element.instanceId,
        type: 'DEC',
      }
    },
  )
  return {
    elementsForDelete,
    instancReferencesToDelete,
  }
}

/**
 * Действие пользователя - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElement =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instancReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instancReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))
    dispatch(
      pushHistoryElement(() => {
        dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsForDelete))
      }),
    )
  }

/**
 * Обратное действие на добавление элемента - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElementHistory =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instancReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instancReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))
  }
