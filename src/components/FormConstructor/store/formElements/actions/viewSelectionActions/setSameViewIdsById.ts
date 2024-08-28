import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewAll, selectViewById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'

/**
 * Устанавливает id элементов принадлежащих одному инстансу (скопрованные элементы)
 * @param instanceId Идентикатор Инстанса
 */
export const setSameElementsIdsById =
  (elementId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    let sameInstanceElementsIds: string[] = state.formConstructor.sameInstanceElementsIds

    if (sameInstanceElementsIds.length) {
      dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))
      return
    }

    const instanceId = selectViewById(state, elementId)?.instanceId
    if (instanceId) {
      sameInstanceElementsIds = selectViewAll(state)
        .filter(el => el.instanceId === instanceId)
        .map(el => el.id)

      dispatch(formConstructorSlice.actions.setSameInstanceElementsIds(sameInstanceElementsIds))
    }
  }

export const clearSameInstanceIds = () => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))
}
