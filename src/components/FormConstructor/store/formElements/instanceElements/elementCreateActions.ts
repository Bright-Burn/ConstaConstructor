import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../../coreTypes'
import { deepCopyElements } from '../../../utils'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById, getElementsOnLayer } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payload'

import { deleteFormElementRollback } from './deleteFormElements'
import { isDragFormElement, isDragGroupElement } from './dragElemGuards'
import type { ChangeElementLinkCountPayload } from './types'

/**
 * Функция добавляет новые элементы и инстансы.
 * @param addPayloads - Массив с информацией о новых элементах и их родительских слоях.
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    //Список элементов для добавления(отображение)
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    // Массив для хранения изменений количества ссылок на элементы
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    // Массив для хранения новых инстансов
    const formInstances: FormInstance<AllElementTypes>[] = []

    addPayloads.forEach(payload => {
      //Новый порядковый номер - количество всех дочерних элементов в слое + 1
      const order = getSiblingsCount(getState(), payload.newParentElementId) + 1
      const payloadElement = payload.element
      const instanceId = uuid()

      // Добавляем новый инстанс
      formInstances.push({
        id: instanceId,
        props: payload.element.props,
      })
      // Добавляем изменение количества ссылок
      changeLinksCountPayloads.push({ id: instanceId, type: 'INC' })
      // Если элемент является группирующим
      if (isDragGroupElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          isOuter: payloadElement.isOuter,
          instanceId,
          order,
          parentId: payload.newParentElementId,
          type: elementType,
        })
        // Если элемент является обычным
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          instanceId,
          parentId: payload.newParentElementId,
          order,
          type: elementType,
        })
      }
    })
    // Диспатчем в стор подготовленный данные
    // Диспатчим действия для добавления новых элементов
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
    // Диспатчим действия для изменения количества ссылок
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    // Диспатчим действия для добавления новых инстансов
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))
    // Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        elementsToAdd.forEach(elem => {
          dispatch(deleteFormElementRollback(elem.id))
        })
      }),
    )
  }

/**
 * Добаляет новый элемент, использует существующий инстанс - Функционал копирования
 */
export const copyFormElementLink =
  (elementId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    //Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным
    const upperElementToCopy = getElementById(elementId)(state)
    // Массив для хранения копируемых элементов
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (upperElementToCopy) {
      //Новый порядковый номер - количество всех дочерних элементов в слое + 1
      const orderForUpperElement =
        getSiblingsCount(getState(), upperElementToCopy.parentId || '') + 1
      // Получаем дочерние элементы элемента, который нужно скопировать
      const elements = getElementsOnLayer(upperElementToCopy.id)(state)
      // Добавляем элемент и его дочерние элементы в массив
      treeElements.push({ ...upperElementToCopy, order: orderForUpperElement }, ...elements)
    }
    //Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок
    const newElements = deepCopyElements(treeElements)
    // Диспатчим действия для изменения количества ссылок
    dispatch(
      dispatch(
        formConstructorSlice.actions.changeElementLinkCount(
          newElements.map(element => {
            return { id: element.instanceId, type: 'INC' }
          }),
        ),
      ),
    )
    // Диспатчим действия для добавления новых элементов
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElements))
    //Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        newElements.forEach(elem => {
          dispatch(deleteFormElementRollback(elem.id))
        })
      }),
    )
  }

/**
 * Создает новый элемент и добавляет новый инстанс из payload - Функционал добавления базовых элементов
 */
export const addFormElementWithDefaultInstance =
  (payload: AddElementsWithInstancesPayload) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    //Список элементов - отображение
    const elements = payload.elements
    //Список инстансов
    const instances = payload.instances
    //Идентифкатор слоя, куда происходит вставка
    const insertionParentId = payload.parentId
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    //Новый порядковый номер - количество всех дочерних элементов в слое + 1
    const orderForParentElem = getSiblingsCount(getState(), insertionParentId) + 1
    //Добавляем порядковые номера и правильный parentId  к каждому элементу
    const elementsWithOrder = elements.map(elem => {
      return {
        ...elem,
        parentId: !elem.parentId ? insertionParentId : elem.parentId,
        order: !elem.parentId ? orderForParentElem : elem.order,
      }
    })

    elementsWithOrder.forEach(elem => {
      changeLinksCountPayloads.push({
        id: elem.instanceId,
        type: 'INC',
      })
    })
    //Диспатчем в стор подготовленный данные
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsWithOrder))
    //Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        elements.forEach(elem => {
          dispatch(deleteFormElementRollback(elem.id))
        })
      }),
    )
  }
