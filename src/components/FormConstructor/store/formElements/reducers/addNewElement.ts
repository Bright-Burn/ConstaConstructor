import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { AddNewElementPayload, CancelAddElement, HistoryAction } from '../payload'
import { HistoryList } from '../../../utils'
import { maxHistorySize } from '../slices'

export const addNewElement = (
  state: IFormConstructor,
  action: PayloadAction<AddNewElementPayload[]>,
) => {
  const addPayloads = action.payload

  addElement(state, addPayloads)

  const elementsIds = action.payload.map(payload => payload.element.id)
  const cancelAddElement: CancelAddElement = new CancelAddElement(elementsIds)

  const newHistory = new HistoryList<HistoryAction>({
    maxSize: maxHistorySize,
    size: state.history.size,
    tail: state.history.tail,
    head: state.history.head,
  })
  newHistory.insert(cancelAddElement)
  state.history = newHistory
}

export const addElement = (state: IFormConstructor, addPayloads: AddNewElementPayload[]) => {
  const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)

  addPayloads.forEach(payload => {
    const element = payload.element
    const newTreeMap = new Map<string, string[]>(state.allElementsTree)
    newTreeMap.set(payload.parent, [...(newTreeMap.get(payload.parent) || []), element.id])
    state.allElementsTree = newTreeMap

    newAllelementMap.set(element.id, element)
  })
  state.allElementsMap = newAllelementMap
}

