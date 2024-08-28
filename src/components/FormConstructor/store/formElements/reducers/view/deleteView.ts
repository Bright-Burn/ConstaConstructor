import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../../coreTypes'
import { viewAdapter } from '../../adapters'

export const deleteFormElement = (state: IFormConstructor, action: PayloadAction<string[]>) => {
  viewAdapter.removeMany(state.views, action.payload)
}
