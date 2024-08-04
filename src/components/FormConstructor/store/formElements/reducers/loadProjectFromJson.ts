import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'

export const loadProjectFromJson = (
  state: IFormConstructor,
  action: PayloadAction<IFormConstructor>,
) => {
  const newSate = action.payload
  return newSate
}
