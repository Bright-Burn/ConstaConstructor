import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../../coreTypes'
import { viewAdapter } from '../../adapters'

export const reorderView = (
  state: IFormConstructor,
  action: PayloadAction<IFormElement | IGroupElement>,
) => {
  viewAdapter.updateOne(state.views, { id: action.payload.id, changes: action.payload })
}
