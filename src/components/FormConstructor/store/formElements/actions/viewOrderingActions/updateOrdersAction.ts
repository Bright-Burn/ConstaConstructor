import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

export const updateOrders =
  (payload: (IFormElement | IGroupElement)[]) => (dispatch: AppDispatch) => {
    const newPayload = payload.map(item => ({ id: item.id, changes: item }))
    dispatch(formConstructorSlice.actions.updateOrders(newPayload))
  }
