import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../../coreTypes'
import { instanceAdapter } from '../../adapters'

import type { ChangeElementLinkCountPayload } from './payloads'

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
            instanceAdapter.removeOne(state.instances, payload.id)
          }
          break
        }
      }
    }
  })
}
