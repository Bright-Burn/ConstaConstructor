import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { AddNewElementPayload } from '../payload'
import { pushHistory } from '../history'

export const addNewElement = (
  state: IFormConstructor,
  action: PayloadAction<AddNewElementPayload[]>,
) => {
  const addPayloads = action.payload
  const newTreeMap = new Map<string, string[]>(state.allElementsTree)

  const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)

  addPayloads.forEach(payload => {
    const element = payload.element
    newTreeMap.set(payload.parent, [...(newTreeMap.get(payload.parent) || []), element.id])
    state.allElementsTree = newTreeMap

    newAllelementMap.set(element.id, element)
  })
  state.allElementsMap = newAllelementMap

  pushHistory(state)
}
