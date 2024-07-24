import { PayloadAction, Update } from '@reduxjs/toolkit'
import { ChangeElementLinkCountPayload } from './types'
import { AllElementTypes, FormInstance, IFormConstructor } from '../../../coreTypes'
import { formInstanceAdapter } from '../formInstanseAdapter'

/**
 * Создает новый инстанс
 */
export const addNewFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<FormInstance<AllElementTypes>>,
) => {
  formInstanceAdapter.addOne(state.elmentInstances, payload)
}

/**
 * Создает новый инстанс
 */
export const updateFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<Update<FormInstance<AllElementTypes>>>,
) => {
  formInstanceAdapter.updateOne(state.elmentInstances, payload)
}

/**
 * Управляет ссылками на инстансы
 */
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
