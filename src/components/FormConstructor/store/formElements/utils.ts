import { IButtonActionElement, IFormElementButton, buttonActionsActive } from './buttonTypes'
import { IFormConstructor } from './types'

export const deleteFormElementFromTree = (elementId: string, state: IFormConstructor) => {
  // const allElementsTree = new Map(state.allElementsTree)
  // const allElementsMap = new Map(state.allElementsMap)
  // const deleteChildren = (elementId: string) => {
  //   const childrenIds = allElementsTree.get(elementId)
  //   if (childrenIds) {
  //     childrenIds.forEach(child => {
  //       deleteChildren(child)
  //     })
  //   }
  //   allElementsMap.delete(elementId)
  //   allElementsTree.delete(elementId)
  // }
  // deleteChildren(elementId)
  // state.allElementsMap = allElementsMap
  // state.allElementsTree = allElementsTree
}

export const deleteButtonActions = (elementId: string, state: IFormConstructor) => {
  // const allElementsTree = new Map(state.allElementsTree)
  // // const allElementsMap = new Map(state.allElementsMap)
  // const elementToDelete = allElementsMap.get(elementId)
  // if (elementToDelete && buttonActionsActive.includes(elementToDelete.type)) {
  //   const connectedButton = (elementToDelete as IButtonActionElement).connectedButtonId
  //   const element = allElementsMap.get(connectedButton)
  //   if (element && element.type === 'Button') {
  //     const connectedButtonElement = element as IFormElementButton
  //     connectedButtonElement.props.action = 'none'
  //     allElementsTree.set(connectedButtonElement.id, [])
  //   }
  // }
  // state.allElementsMap = allElementsMap
  // state.allElementsTree = allElementsTree
}
