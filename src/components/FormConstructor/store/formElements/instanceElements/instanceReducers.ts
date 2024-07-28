import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, IFormConstructor } from '../../../coreTypes'
import { formInstanceAdapter } from '../formInstanseAdapter'

import type { ChangeElementLinkCountPayload } from './types'

/**
 * Создает новый инстанс
 */
export const addNewFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<FormInstance<AllElementTypes>[]>,
) => {
  formInstanceAdapter.addMany(state.elementInstances, payload)
}

/**
 * Обновляет инстанс
 */
export const updateFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<Update<FormInstance<AllElementTypes>>>,
) => {
  formInstanceAdapter.updateOne(state.elementInstances, payload)
}

/**
 * Управляет ссылками на инстансы, удаляет инстанс при отсутствии ссылок
 */
export const changeElementLinkCount = (
  state: IFormConstructor,
  payloadAction: PayloadAction<ChangeElementLinkCountPayload[]>,
) => {
  const instanceManager = state.instanceManager
  payloadAction.payload.forEach(payload => {
    const type = payload.type
    switch (type) {
      case 'INC': {
        instanceManager[payload.id] = instanceManager[payload.id]
          ? instanceManager[payload.id] + 1
          : 1
        break
      }
      case 'DEC': {
        if (instanceManager[payload.id]) {
          instanceManager[payload.id]--
          if (instanceManager[payload.id] === 0) {
            // Необходимо удалять из объекта
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete instanceManager[payload.id]
            formInstanceAdapter.removeOne(state.elementInstances, payload.id)
          }
          break
        }
      }
    }
  })
}
