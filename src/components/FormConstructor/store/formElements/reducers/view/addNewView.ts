import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../../coreTypes'
import { viewAdapter } from '../../adapters'

export const addNewView = (
  state: IFormConstructor,
  { payload }: PayloadAction<(IFormElement | IGroupElement)[]>,
) => {
  viewAdapter.addMany(state.views, payload)
}
