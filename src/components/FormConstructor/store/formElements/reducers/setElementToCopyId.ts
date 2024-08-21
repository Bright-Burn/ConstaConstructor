import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'

export const setElementToCopyId = (state: IFormConstructor, action: PayloadAction<string>) => {
  state.elementToCopyId = action.payload
}
