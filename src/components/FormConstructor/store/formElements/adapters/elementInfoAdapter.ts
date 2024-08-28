import { createEntityAdapter } from '@reduxjs/toolkit'

import type { ViewtInfo } from '../../../coreTypes'
import type { RootState } from '../../setupStore'

const viewInfoAdapter = createEntityAdapter<ViewtInfo>({
  selectId: ViewtInfo => ViewtInfo.id,
})

const { selectById, selectAll } = viewInfoAdapter.getSelectors<RootState>(
  state => state.formConstructor.viewInfo,
)

export { selectAll as selectViewInfoAll, selectById as selectViewInfoById, viewInfoAdapter }
