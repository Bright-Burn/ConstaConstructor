import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, IFormConstructor } from '../../../../coreTypes'
import { instanceAdapter } from '../../adapters'

/**
 * Обновляет инстанс
 */
export const updateFormInstance = (
  state: IFormConstructor,
  { payload }: PayloadAction<Update<FormInstance<AllElementTypes>>>,
) => {
  instanceAdapter.updateOne(state.instances, payload)
}
