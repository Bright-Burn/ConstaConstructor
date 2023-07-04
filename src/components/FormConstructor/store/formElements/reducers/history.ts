import { HistoryList } from '../../../utils'
import {
  AddNewElementPayload,
  CancelAddElement,
  CancelDelete,
  CancleSetNewSelectedElement,
  HistoryAction,
} from '../payload'
import { maxHistorySize } from '../slices'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { addElement } from './addNewElement'
import { updateSelectedElement } from './setSelectedElement'

export const setHistoryBackState = (state: IFormConstructor) => {
  const newHistory = new HistoryList<HistoryAction>({
    maxSize: maxHistorySize,
    size: state.history.size,
    tail: state.history.tail,
    head: state.history.head,
  })
  const historyAction = newHistory.tail
  if (historyAction != null) {
    updateStateFromHistoryAction(state, historyAction.data)
    newHistory.pop()
    state.history = newHistory
  }
}

export const updateStateFromHistoryAction = (
  state: IFormConstructor,
  historyAction: HistoryAction,
) => {
  if (historyAction instanceof CancelAddElement) {
    deleteElements(historyAction.elementsIds, state)
  }
  if (historyAction instanceof CancelDelete) {
    const deleteItems = historyAction.deleteItems.map(deleteItem => {
      const addPayload: AddNewElementPayload = {
        element: deleteItem.element,
        parent: deleteItem.parentId,
      }
      return addPayload
    })
    addElement(state, deleteItems)
  }

  if (historyAction instanceof CancleSetNewSelectedElement) {
    const elementId = historyAction.elementId
    const elementPrevProps = historyAction.prevProps

    const element = state.allElementsMap.get(elementId)
    if (element) {
      updateSelectedElement(state, element, elementPrevProps)
    }
  }
}

const deleteElements = (elementsIds: string[], state: IFormConstructor) => {
  const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)
  const newAllElementsTree = new Map<string, string[]>(state.allElementsTree)

  elementsIds.forEach(elementId => {
    newAllelementMap.delete(elementId)
    newAllElementsTree.delete(elementId)
  })
  state.allElementsMap = newAllelementMap
  state.allElementsTree = newAllElementsTree
}

