import { createEntityAdapter } from '@reduxjs/toolkit'

import type { ViewInfo } from '../../../coreTypes'
import type { RootState } from '../../setupStore'

const viewInfoAdapter = createEntityAdapter<ViewInfo>({
  selectId: ViewInfo => ViewInfo.id,
})

const { selectById, selectAll, selectEntities } = viewInfoAdapter.getSelectors<RootState>(
  state => state.formConstructor.viewInfo,
)

export {
  selectAll as selectViewInfoAll,
  selectById as selectViewInfoById,
  selectEntities as selectViewInfoEntities,
  viewInfoAdapter,
}
