import { createEntityAdapter } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance } from '../../coreTypes'

export const formInstanceAdapter = createEntityAdapter<FormInstance<AllElementTypes>>({
  selectId: instance => instance.id,
})
