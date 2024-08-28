import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { IFormConstructor, ViewtInfo } from '../../../../coreTypes'
import { viewInfoAdapter } from '../../adapters'

export const replaceViewInfo = (
  state: IFormConstructor,
  action: PayloadAction<Update<ViewtInfo>>,
) => {
  viewInfoAdapter.updateOne(state.viewInfo, action.payload)
}
