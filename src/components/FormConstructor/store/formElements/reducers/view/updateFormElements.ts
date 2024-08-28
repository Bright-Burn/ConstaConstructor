import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { IFormConstructor, IGroupElement } from '../../../../coreTypes'
import { viewAdapter } from '../../adapters'

export const updateFormElements = (
  state: IFormConstructor,
  { payload }: PayloadAction<Update<IGroupElement>>,
) => {
  viewAdapter.updateOne(state.views, payload)
}
