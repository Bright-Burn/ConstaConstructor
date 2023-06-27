import { ButtonActionElement, FormElementButton, buttonActionsActive } from './buttonTypes'
import { IFormConstructor } from './types'

export const deleteElementFromTree = (elementId: string, state: IFormConstructor) => {
  const allElementsTree = new Map(state.allElementsTree)
  const allElementsMap = new Map(state.allElementsMap)

  const deleteChildren = (elementId: string) => {
    const childrenIds = allElementsTree.get(elementId)
    if (childrenIds) {
      childrenIds.forEach(child => {
        deleteChildren(child)
      })
    }
    allElementsMap.delete(elementId)
    allElementsTree.delete(elementId)
  }

  deleteChildren(elementId)

  state.allElementsMap = allElementsMap
  state.allElementsTree = allElementsTree
}

export const deleteButtonActions = (elementId: string, state: IFormConstructor) => {
  const allElementsTree = new Map(state.allElementsTree)
  const allElementsMap = new Map(state.allElementsMap)
  const elementToDelete = allElementsMap.get(elementId)
  if (
    elementToDelete &&
    buttonActionsActive.includes(elementToDelete.type) &&
    elementToDelete instanceof ButtonActionElement
  ) {
    const connectedButton = elementToDelete.connectedButtonId
    const element = allElementsMap.get(connectedButton)
    if (element && element.type === 'Button' && element instanceof FormElementButton) {
      element.props.action = 'none'
      allElementsTree.set(element.id, [])
    }
  }
  state.allElementsMap = allElementsMap
  state.allElementsTree = allElementsTree
}

