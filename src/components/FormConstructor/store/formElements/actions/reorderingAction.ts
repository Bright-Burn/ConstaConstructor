import type { IFormElement, IGroupElement } from '../../../coreTypes'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { layuoutAdapter } from '../initialState'

type orderingType = {
  elementId: string
  parentId: string
  left: boolean
  selectedElId?: string
}
const { selectById } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)
export const reorderingFormElement =
  (payload: orderingType) => (dispatch: AppDispatch, getState: () => RootState) => {
    const element = selectById(getState(), payload.elementId)
    const targeElement = selectById(getState(), payload.parentId)
    const selectedElId = payload.selectedElId

    if (element && targeElement) {
      let parentId = targeElement.parentId
      const order = payload.left
        ? (targeElement.order + targeElement.order - 1) / 2
        : (targeElement.order + targeElement.order + 1) / 2
      if (selectedElId === targeElement.id && targeElement.type === 'Layout') {
        parentId = payload.selectedElId
      }

      const newEl: IFormElement | IGroupElement = { ...element, parentId, order }
      dispatch(formConstructorSlice.actions.reorderFormElements(newEl))
    }
  }
