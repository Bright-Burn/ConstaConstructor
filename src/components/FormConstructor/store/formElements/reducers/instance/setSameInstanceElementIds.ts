import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../../coreTypes'

/**
 * Устанавливает идентикаторы скопированных элементов
 */
export const setSameInstanceElementsIds = (
  state: IFormConstructor,
  action: PayloadAction<string[]>,
) => {
  state.sameInstanceElementsIds = action.payload
}
