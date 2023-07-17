import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { DeleteElementPayload } from '../payload'
import { IButtonActionElement, IFormElementButton, buttonActionsActive } from '../buttonTypes'
import { pushHistory } from '../history'

export const deleteElement = (
  state: IFormConstructor,
  action: PayloadAction<DeleteElementPayload>,
) => {
  const allElementsTree = new Map(state.allElementsTree)
  const allElementsMap = new Map(state.allElementsMap)

  processDelete(action.payload.elementId, allElementsTree, allElementsMap)

  state.allElementsMap = allElementsMap
  state.allElementsTree = allElementsTree

  pushHistory(state)
}

export const processDelete = (
  elementId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IFormElement | IGroupElement>,
) => {
  const elementsToDelete = findElementsToDelete(elementId, allElementsTree)

  elementsToDelete.forEach(elementId => {
    deleteButtonActions(elementId, allElementsTree, allElementsMap)
    allElementsMap.delete(elementId)
    allElementsTree.delete(elementId)
  })
}

const findElementsToDelete = (elementId: string, allElementsTree: Map<string, string[]>) => {
  const elementsToDelete: string[] = []

  const findChildrenToDelete = (elementId: string) => {
    const childrenIds = allElementsTree.get(elementId)
    if (childrenIds) {
      childrenIds.forEach(child => {
        elementsToDelete.push(child)
        findChildrenToDelete(child)
      })
    }
  }

  elementsToDelete.push(elementId)
  findChildrenToDelete(elementId)

  return elementsToDelete
}

const deleteButtonActions = (
  elementId: string,
  allElementsTree: Map<string, string[]>,
  allElementsMap: Map<string, IFormElement | IGroupElement>,
) => {
  const elementToDelete = allElementsMap.get(elementId)
  if (elementToDelete && buttonActionsActive.includes(elementToDelete.type)) {
    const connectedButton = (elementToDelete as IButtonActionElement).connectedButtonId
    const element = allElementsMap.get(connectedButton)
    if (element && element.type === 'Button') {
      const connectedButtonElement = element as IFormElementButton
      connectedButtonElement.props.action = 'none'
      allElementsTree.set(connectedButtonElement.id, [])
    }
  }
}

