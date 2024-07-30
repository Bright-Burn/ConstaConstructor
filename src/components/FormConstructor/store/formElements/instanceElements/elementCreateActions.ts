import uuid from 'react-uuid'

import type { IFormElement, IGroupElement } from '../../../coreTypes'
import { deepCopyElements } from '../../../utils'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getSiblingsCount } from '../formElementsActions'
import { getElementById, getElementsOnLayer } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import type { AddElementsWithInstancesPayload, AddNewElementPayload } from '../payload'

import { deleteFormElement } from './deleteFormElements'
import { isDragFormElement, isDragGroupElement } from './dragElemGuards'
import {
  addInstances,
  createInstanceForElement,
  manageInstanceLinkForElement,
} from './instanceActions'
import type { ChangeElementLinkCountPayload } from './types'

/**
 * Добавляет новый элемент, созадвая новый инстанс
 */
export const addNewFormElement =
  (addPayloads: AddNewElementPayload[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    addPayloads.forEach(payload => {
      const siblingsCount = getSiblingsCount(getState(), payload.parent)
      const payloadElement = payload.element
      const instanceId = uuid()

      dispatch(
        createInstanceForElement([
          {
            instanceId,
            type: payloadElement.type,
            props: payloadElement.props,
          },
        ]),
      )

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

      dispatch(
        pushHistoryElement(() => {
          dispatch(formConstructorSlice.actions.deleteFormElement([payloadElement.id]))
          dispatch(manageInstanceLinkForElement([{ id: instanceId, type: 'DEC' }]))
        }),
      )
    })
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
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
    dispatch(addInstances(instances))
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsWithOrder))
  }
