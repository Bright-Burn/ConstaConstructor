import { createEntityAdapter } from '@reduxjs/toolkit'
import { AllElementTypes, FormInstance } from '../../coreTypes'

export const formInstanceAdapter = createEntityAdapter<FormInstance<AllElementTypes>>({
  selectId: instance => instance.id,
})
