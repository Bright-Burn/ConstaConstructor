import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { AddNewElementPayload } from '../payload'

export const addNewElement = (
  state: IFormConstructor,
  action: PayloadAction<AddNewElementPayload[]>,
) => {
  const addPayloads = action.payload

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

