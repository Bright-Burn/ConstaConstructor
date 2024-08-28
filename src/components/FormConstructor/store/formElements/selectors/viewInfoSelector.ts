import { RootState } from '../../setupStore'
import { selectViewInfoById, selectViewInfoEntities } from '../adapters'

export const getViewInfoByIdSelector = (id: string) => (state: RootState) => {
  return selectViewInfoById(state, id)
}

export const viewInfoSelector = (state: RootState) => {
  return selectViewInfoEntities(state)
}
