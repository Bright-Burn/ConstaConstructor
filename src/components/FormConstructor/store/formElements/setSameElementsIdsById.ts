import type { AppDispatch, RootState } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'
import { selectAll, selectById } from './layoutAdapterSelectors'
import { setSelectedElement } from './setSelectedElementAction'

/**
 * Устанавливает id элементов принадлежащих одному инстансу (скопрованные элементы)
 * @param instanceId Идентикатор Инстанса
 */
export const setSameElementsIdsById =
  (elementId: string) => (disptch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    let sameInstanceElementsIds: string[] = state.formConstructor.sameInstanceElementsIds || []

    if (sameInstanceElementsIds.length) {
      disptch(formConstructorSlice.actions.setSameInstanceElementsIds([]))
      return
    }

    const instanceId = selectById(state, elementId)?.instanceId
    if (instanceId) {
      sameInstanceElementsIds = selectAll(state)
        .filter(el => el.instanceId === instanceId)
        .map(el => el.id)

      disptch(setSelectedElement(null))
      disptch(formConstructorSlice.actions.setSameInstanceElementsIds(sameInstanceElementsIds))
    }
  }
