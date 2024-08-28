import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../../coreTypes'
import { viewAdapter } from '../../adapters'

export const updateOrders = (
  state: IFormConstructor,
  action: PayloadAction<Update<IFormElement | IGroupElement>[]>,
) => {
  viewAdapter.updateMany(state.views, action.payload)
}
