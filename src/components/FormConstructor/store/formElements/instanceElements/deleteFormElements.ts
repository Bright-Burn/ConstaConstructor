import type { IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { selectAll, selectById } from '../layoutAdapterSelectors'

import type { ChangeElementLinkCountPayload } from './types'

const deleteElementFormById = (id: string, state: RootState) => {
  /*Взаимосвязь id родительского элемента - элемент*/
  const parentElementIdElemMap = new Map<string, (IGroupElement | IFormElement)[]>()
  /*Верхнеуровневый элемент для удаления*/
  const elementForDelete = selectById(state, id)

  if (!elementForDelete) {
    return {
      elementsForDelete: [],
      instancReferencesToDelete: [],
    }
  }
  const allElements = selectAll(state)

  /*Заполняем взаимосвязь id родительского элемента - элемент*/
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

  /*Рекурсивная функция, формирующая список всех эелемнтов для удаления, с учетом возможной вложенности*/
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

  /*Список элементов для удаления*/
  const elementsForDelete = [elementForDelete, ...getElementsForDelete(elementForDelete)]

  /*Список инстансов для удаления*/
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
