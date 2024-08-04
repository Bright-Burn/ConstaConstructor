import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../../coreTypes'
import { deepCopyElements } from '../../../utils'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById, getElementsOnLayer } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payload'

import { deleteFormElementHistory } from './deleteFormElements'
import { isDragFormElement, isDragGroupElement } from './dragElemGuards'
import type { ChangeElementLinkCountPayload } from './types'

/**
 * Добавляет новый элемент, созадвая новый инстанс - Функционал добавления элемента
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    /*Список элементов для добавления(отображение)*/
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    /*Список пайлоадов на изменение количества ссылок*/
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    /*Список инстансов для добавления*/
    const formInstances: FormInstance<AllElementTypes>[] = []

    addPayloads.forEach(payload => {
      /*Новый порядковый номер - количество всех дочерних элементов в слое + 1*/
      const order = getSiblingsCount(getState(), payload.parent) + 1
      const payloadElement = payload.element
      const instanceId = uuid()

      /*Доабавляем новый инстанс*/
      formInstances.push({
        id: instanceId,
        props: payload.element.props,
      })

      /*Доабавляем новый пайлоад на количества ссылок*/
      changeLinksCountPayloads.push({ id: instanceId, type: 'INC' })

      /*Доабавляем новый элемент(отображение)*/
      if (isDragGroupElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          isOuter: payloadElement.isOuter,
          instanceId,
          order,
          parentId: payload.parent,
          type: elementType,
        })
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          instanceId,
          parentId: payload.parent,
          order,
          type: elementType,
        })
      }
    })

    /*Диспатчем в стор подготовленный данные*/
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))

    /*Диспатчем в стор коллбек на отмену изменений*/
    dispatch(
      pushHistoryElement(() => {
        elementsToAdd.forEach(elem => {
          dispatch(deleteFormElementHistory(elem.id))
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
    /*Верхнеуровневый элемент для копирования, может быть как группирующим, так и обычным*/
    const upperElementToCopy = getElementById(elementId)(state)
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (upperElementToCopy) {
      /*Новый порядковый номер - количество всех дочерних элементов в слое + 1*/
      const orderForUpperElement =
        getSiblingsCount(getState(), upperElementToCopy.parentId || '') + 1
      const elements = getElementsOnLayer(upperElementToCopy.id)(state)
      treeElements.push({ ...upperElementToCopy, order: orderForUpperElement }, ...elements)
    }

    /*Производит глубокое копирование ветви с установкой новых id, сохраняя взаимосвязи типа родитель - ребенок*/
    const newElements = deepCopyElements(treeElements)

    /*Диспатчем в стор подготовленный данные*/
    dispatch(
      dispatch(
        formConstructorSlice.actions.changeElementLinkCount(
          newElements.map(element => {
            return { id: element.instanceId, type: 'INC' }
          }),
        ),
      ),
    )
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElements))

    /*Диспатчем в стор коллбек на отмену изменений*/
    dispatch(
      pushHistoryElement(() => {
        newElements.forEach(elem => {
          dispatch(deleteFormElementHistory(elem.id))
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
    /*Список элементов - отображение*/
    const elements = payload.elements
    /*Список инстансов*/
    const instances = payload.instances
    /*Идентифкатор слоя, куда происходит вставка*/
    const insertionParentId = payload.parentId
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []

    /*Новый порядковый номер - количество всех дочерних элементов в слое + 1*/
    const orderForParentElem = getSiblingsCount(getState(), insertionParentId) + 1

    /*Устаналиваем правильный parentId и order в структуре*/
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

    /*Диспатчем в стор подготовленный данные*/
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsWithOrder))

    /*Диспатчем в стор коллбек на отмену изменений*/
    dispatch(
      pushHistoryElement(() => {
        elements.forEach(elem => {
          dispatch(deleteFormElementHistory(elem.id))
        })
      }),
    )
  }
