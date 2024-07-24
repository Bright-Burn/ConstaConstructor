import { PayloadAction } from '@reduxjs/toolkit'
import {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
} from 'src/components/FormConstructor/coreTypes'
import { formInstanceAdapter } from '../formInstanse'
import { ChangeElementLinkCountPayload } from './types'

export const addNewFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<FormInstance<AllElementTypes>>,
) => {
  formInstanceAdapter.addOne(state.elmentInstances, payload)
}

export const deleteFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<{ id: string }>,
) => {
  formInstanceAdapter.removeOne(state.elmentInstances, payload.id)
}

export const changeElementLinkCount = (
  state: IFormConstructor,
  { payload, type }: PayloadAction<ChangeElementLinkCountPayload>,
) => {
  const instanceManager = state.instanceManager
  switch (type) {
    case 'INC': {
      instanceManager[payload.id] = instanceManager[payload.id]
        ? instanceManager[payload.id] + 1
        : 1
      return state
    }
    case 'DEC': {
      instanceManager[payload.id]--
      if (instanceManager[payload.id] === 0) {
        delete instanceManager[payload.id]
      }
      return state
    }
  }
}
