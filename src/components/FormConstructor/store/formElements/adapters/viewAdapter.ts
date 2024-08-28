import { createEntityAdapter } from '@reduxjs/toolkit'

import type { IFormElement, IGroupElement } from '../../../coreTypes'
import type { RootState } from '../../setupStore'

const viewAdapter = createEntityAdapter<IFormElement | IGroupElement>({
  selectId: layout => layout.id,
})

const { selectAll, selectById } = viewAdapter.getSelectors<RootState>(
  state => state.formConstructor.views,
)
export { selectAll as selectViewAll, selectById as selectViewById, viewAdapter }
