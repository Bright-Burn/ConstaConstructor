import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { IFormConstructor, ViewInfo } from '../../../../coreTypes'
import { viewInfoAdapter } from '../../adapters'

export const updateViewInfo = (
  state: IFormConstructor,
  action: PayloadAction<Update<ViewInfo>>,
) => {
  viewInfoAdapter.updateOne(state.viewInfo, action.payload)
}

export const addViewInfos = (state: IFormConstructor, action: PayloadAction<ViewInfo[]>) => {
  viewInfoAdapter.addMany(state.viewInfo, action.payload)
}

export const deleteViewInfos = (state: IFormConstructor, action: PayloadAction<string[]>) => {
  viewInfoAdapter.removeMany(state.viewInfo, action.payload)
}
