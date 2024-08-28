import { getAllChildrenElements } from '../../../../utils'
import { pushHistoryElement } from '../../../history'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll, selectViewById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { ChangeElementLinkCountPayload } from '../../reducers'
import { addViews, deleteViews } from './combinedViewActions'

export const deleteElementFormById = (id: string, state: RootState) => {
  // Получаем элемент для удаления по id
  const elementForDelete = selectViewById(state, id)
  // Если элемент для удаления не найден, возвращаем пустые массивы
  if (!elementForDelete) {
    return {
      elementsForDelete: [],
      instanceReferencesToDelete: [],
    }
  }
  // Получаем все элементы из состояния
  const allElements = selectViewAll(state)
  // Формируем список элементов для удаления
  const elementsForDelete = [
    elementForDelete,
    ...getAllChildrenElements(elementForDelete, allElements),
  ]
  // Формируем список ссылок на инстансы для удаления
  const instanceReferencesToDelete: ChangeElementLinkCountPayload[] = elementsForDelete.map(
    element => {
      return {
        id: element.instanceId,
        type: 'DEC',
      }
    },
  )
  return {
    elementsForDelete,
    instanceReferencesToDelete,
  }
}

/**
 * Действие пользователя - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElement =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instanceReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(deleteViews(idsForDelete))
    dispatch(
      pushHistoryElement(() => {
        dispatch(addViews(elementsForDelete))
      }),
    )
  }

/**
 * Обратное действие на добавление элемента - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElementRollback =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instanceReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(deleteViews(idsForDelete))
  }
