import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'

export const setElementToCopyId = (
  state: IFormConstructor,
  action: PayloadAction<string | null>,
) => {
  state.elementToCopyId = action.payload
}
