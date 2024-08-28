import type { PayloadAction } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, IFormConstructor } from '../../../../coreTypes'
import { instanceAdapter } from '../../adapters'

/**
 * Создает новый инстанс
 */
export const addNewFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<FormInstance<AllElementTypes>[]>,
) => {
  instanceAdapter.addMany(state.instances, payload)
}
