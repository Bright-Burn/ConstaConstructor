import type { AppDispatch } from '../setupStore'

import { baseComponentsSlice } from './baseComponentsSlices'
import type { BaseComponentSerializable, IBaseComponent } from './types'

export const addBaseElement =
  (baseElement: BaseComponentSerializable) => (dispatch: AppDispatch) => {
    const baseComponent = baseComponentSerializableToState(baseElement)
    dispatch(baseComponentsSlice.actions.addNewBaseElement({ baseComponent }))
  }

export const setDraggableBaseComponent = (el: IBaseComponent | null) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent: el }))
}

const baseComponentSerializableToState = (el: BaseComponentSerializable): IBaseComponent => {
  return {
    description: el.description,
    id: el.id,
    instances: el.instances,
    name: el.name,
    viewInfos: el.viewInfos || [],
    views: el.childrenElementList,
  }
}
