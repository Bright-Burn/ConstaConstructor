import { createEntityAdapter } from '@reduxjs/toolkit'
import { FormInstance, AllElementTypes } from '../../coreTypes'

export const formInstanceAdapter = createEntityAdapter<FormInstance<AllElementTypes>>({
  selectId: instance => instance.id,
})
