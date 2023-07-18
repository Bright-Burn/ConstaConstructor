import { PayloadAction } from '@reduxjs/toolkit'
import { PanelStatePayload } from '../payload'
import { IFormConstructor } from '../types'

export const toggleComponentsStructurePanel = (
  state: IFormConstructor,
  action: PayloadAction<PanelStatePayload>,
) => {
  state.componentsStructurePanelState = !state.componentsStructurePanelState
}
