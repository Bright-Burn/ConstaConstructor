import { createEntityAdapter } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance } from '../../../coreTypes'
import type { RootState } from '../../setupStore'

const instanceAdapter = createEntityAdapter<FormInstance<AllElementTypes>>({
  selectId: instance => instance.id,
})

const { selectById, selectAll } = instanceAdapter.getSelectors<RootState>(
  state => state.formConstructor.instances,
)

export { instanceAdapter, selectAll as selectInstanceAll, selectById as selectInstanceById }
