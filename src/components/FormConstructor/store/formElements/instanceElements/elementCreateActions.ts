import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../../coreTypes'
import {
  copyInstances,
  deepCopyElements,
  getAllChildrenElements,
  getFormType,
} from '../../../utils'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { elementToCopyIdSelector, getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { formInstancesSelector } from '../formInstanceSelectors'
import { selectAll } from '../layoutAdapterSelectors'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payload'
import { clearSameInstanceIds } from '../setSameElementsIdsById'

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
        dispatch(clearSameInstanceIds())
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
  (elementId: string, elementType: AllElementTypes) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const elementToCopyId = elementToCopyIdSelector(state)

    if (!elementToCopyId) {
      return
    }

    let insertionParentId = null
    // Вставка разрешена только в группирующие элементы
    if (getFormType(elementType) === 'FormGroups') {
      insertionParentId = elementId
    } else {
      return
    }

    //Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным
    const upperElementToCopy = getElementById(elementToCopyId)(state)

    // Получаем все элементы из состояния
    const allElements = selectAll(state)
    // Массив для хранения копируемых элементов
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (upperElementToCopy && insertionParentId) {
      //Новый порядковый номер - количество всех дочерних элементов в слое + 1
      const orderForInsertionElem = getSiblingsCount(getState(), insertionParentId || '') + 1
      // Получаем дочерние элементы элемента, который нужно скопировать
      const elements = getAllChildrenElements(upperElementToCopy, allElements)
      // Добавляем элемент и его дочерние элементы в массив
      treeElements.push(
        { ...upperElementToCopy, order: orderForInsertionElem, parentId: insertionParentId },
        ...elements,
      )
      //Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок
      const newElements = deepCopyElements(treeElements)
      // Диспатчим действия для изменения количества ссылок
      dispatch(
        formConstructorSlice.actions.changeElementLinkCount(
          newElements.map(element => {
            return { id: element.instanceId, type: 'INC' }
          }),
        ),
      )
      // Диспатчим действия для добавления новых элементов
      dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElements))
      //Диспатчем в стор коллбек на отмену изменений
      dispatch(
        pushHistoryElement(() => {
          dispatch(clearSameInstanceIds())
          newElements.forEach(elem => {
            dispatch(deleteFormElementRollback(elem.id))
          })
        }),
      )
    }
  }

/**
 * Создает новый элемент и добавляет новый инстанс из payload - Функционал добавления базовых элементов
 */
export const addFormElementWithDefaultInstance =
  (payload: AddElementsWithInstancesPayload) => (dispatch: AppDispatch) => {
    //Список элементов - отображение
    const elements = payload.elements
    //Список инстансов
    const instances = payload.instances
    //Идентифкатор слоя, куда происходит вставка
    const insertionParentId = payload.parentId

    dispatch(addBaseElement(elements, instances, insertionParentId))
  }

/**
 * Создает скопированный базовый элемент (группу элементов) - функционал копирования без наследования
 */
export const insertNewElements =
  (elementId: string, elementType: AllElementTypes) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const elementToCopyId = elementToCopyIdSelector(state)

    if (!elementToCopyId) {
      return
    }

    let insertionParentId = null

    // Вставка разрешена только в группирующие элементы
    if (getFormType(elementType) === 'FormGroups') {
      insertionParentId = elementId
    } else {
      return
    }

    //Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным
    const upperElementToCopy = getElementById(elementToCopyId)(state)

    if (upperElementToCopy && insertionParentId) {
      // Получаем все элементы из состояния
      const allElements = selectAll(state)
      const treeElements: (IFormElement | IGroupElement)[] = []

      // Получаем дочерние элементы элемента, который нужно скопировать
      const elements = getAllChildrenElements(upperElementToCopy, allElements)
      // Добавляем элемент, предварительно обнулив его родителя и его дочерние элементы в массив
      treeElements.push({ ...upperElementToCopy, parentId: undefined }, ...elements)
      const instances = formInstancesSelector(treeElements.map(el => el.instanceId))(state)

      // Копируем инстансы
      const { newInstances, newInstancesIdsDict } = copyInstances(instances)

      // Создаем копию всех элементов с обновленными идентификаторами экземпляров
      const elementsCopy = deepCopyElements(treeElements).map(elem => {
        return { ...elem, instanceId: newInstancesIdsDict[elem.instanceId] }
      })

      dispatch(addBaseElement(elementsCopy, newInstances, insertionParentId))
    }
  }

/**
 * Добавляет элементы в указанную позицию
 * @param elements Список всех элементов (View)
 * @param instances Инстансы (Instances)
 * @param insertionParentId Идентификатор слоя для вставки
 */
const addBaseElement =
  (
    elements: (IFormElement | IGroupElement)[],
    instances: FormInstance<AllElementTypes>[],
    insertionParentId: string,
  ) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    //Новый порядковый номер - количество всех дочерних элементов в слое + 1
    const orderForInsertionElem = getSiblingsCount(getState(), insertionParentId) + 1
    //Добавляем порядковые номера и правильный parentId  к каждому элементу
    const newElementsToAdd = elements.map(elem => {
      return {
        ...elem,
        parentId: !elem.parentId ? insertionParentId : elem.parentId,
        order: !elem.parentId ? orderForInsertionElem : elem.order,
      }
    })

    newElementsToAdd.forEach(elem => {
      changeLinksCountPayloads.push({
        id: elem.instanceId,
        type: 'INC',
      })
    })
    //Диспатчем в стор подготовленный данные
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElementsToAdd))
    //Диспатчем в стор коллбек на отмену изменений
    dispatch(
      pushHistoryElement(() => {
        dispatch(clearSameInstanceIds())
        newElementsToAdd.forEach(elem => {
          dispatch(deleteFormElementRollback(elem.id))
        })
      }),
    )
  }
