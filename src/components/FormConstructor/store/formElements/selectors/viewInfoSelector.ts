import { getViewInfoLabelText } from '../../../utils'
import type { RootState } from '../../setupStore'
import { selectViewById, selectViewInfoById, selectViewInfoEntities } from '../adapters'

/**
 * Селектор, возвращающий Label для view
 * @param viewId
 * @returns
 */
export const getViewInfoLabelByIdSelector = (viewId: string) => (state: RootState) => {
  const view = selectViewById(state, viewId)
  const viewInfo = selectViewInfoById(state, viewId)
  if (view) {
    return getViewInfoLabelText(view, viewInfo || null)
  }
  return ''
}

export const viewInfoSelector = (state: RootState) => {
  return selectViewInfoEntities(state)
}
