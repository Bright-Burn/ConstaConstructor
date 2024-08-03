import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../../coreTypes'
import { deepCopyElements } from '../../../utils'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById, getElementsOnLayer } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payload'

import { deleteFormElement } from './deleteFormElements'
import { isDragFormElement, isDragGroupElement } from './dragElemGuards'
import { manageInstanceLinkForElement } from './instanceActions'
import type { ChangeElementLinkCountPayload } from './types'

/**
 * Добавляет новый элемент, созадвая новый инстанс
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    const formInstances: FormInstance<AllElementTypes>[] = []

    addPayloads.forEach(payload => {
      const siblingsCount = getSiblingsCount(getState(), payload.parent)
      const payloadElement = payload.element
      const instanceId = uuid()

      formInstances.push({
        id: instanceId,
        props: payload.element.props,
      })

      changeLinksCountPayloads.push({ id: instanceId, type: 'INC' })

      if (isDragGroupElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          isOuter: payloadElement.isOuter,
          instanceId,
          order: siblingsCount + 1,
          parentId: payload.parent,
          type: elementType,
        })
      } else if (isDragFormElement(payloadElement)) {
        const elementType = payloadElement.type
        elementsToAdd.push({
          id: payloadElement.id,
          instanceId,
          parentId: payload.parent,
          order: siblingsCount + 1,
          type: elementType,
        })
      }
    })

    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))

    dispatch(
      pushHistoryElement(() => {
        elementsToAdd.forEach(elem => {
          dispatch(deleteFormElement(elem.id, false))
        })
      }),
    )
  }

/**
 * Добаляет новый элемент, использует существующий инстанс
 */
export const copyFormElementLink =
  (elementId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const parentElementToCopy = getElementById(elementId)(state)
    const treeElements: (IFormElement | IGroupElement)[] = []

    if (parentElementToCopy) {
      const orderForParentElem =
        getSiblingsCount(getState(), parentElementToCopy.parentId || '') + 1
      const elements = getElementsOnLayer(parentElementToCopy.id)(state)
      treeElements.push({ ...parentElementToCopy, order: orderForParentElem }, ...elements)
    }

    const newElements = deepCopyElements(treeElements)

    dispatch(
      manageInstanceLinkForElement(
        newElements.map(element => {
          return { id: element.instanceId, type: 'INC' }
        }),
      ),
    )

    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(newElements))
    dispatch(
      pushHistoryElement(() => {
        newElements.forEach(elem => {
          dispatch(deleteFormElement(elem.id, false))
        })
      }),
    )
  }

/**
 * Создает новый элемент и добавляет новый инстанс из payload
 */
export const addFormElementWithDefaultInstance =
  (payload: AddElementsWithInstancesPayload) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const elements = payload.elements
    const instances = payload.instances
    const parentId = payload.parentId
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []

    /*Order для верхнего элемента в структуре*/
    const orderForParentElem = getSiblingsCount(getState(), parentId) + 1

    /*Устаналиваем правильный parentId и order в структуре*/
    const elementsWithOrder = elements.map(elem => {
      return {
        ...elem,
        parentId: !elem.parentId ? parentId : elem.parentId,
        order: !elem.parentId ? orderForParentElem : elem.order,
      }
    })
    elementsWithOrder.forEach(elem => {
      changeLinksCountPayloads.push({
        id: elem.instanceId,
        type: 'INC',
      })
    })

    dispatch(
      pushHistoryElement(() => {
        elements.forEach(elem => {
          dispatch(deleteFormElement(elem.id, false))
        })
      }),
    )

    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instances))
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsWithOrder))
  }
