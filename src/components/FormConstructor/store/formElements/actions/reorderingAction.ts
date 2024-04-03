import type { IFormElement, IGroupElement } from '../../../coreTypes'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { layuoutAdapter } from '../initialState'

type orderingType = {
  elementId: string
  parentId: string
}
const { selectById } = layuoutAdapter.getSelectors<RootState>(
  state => state.formConstructor.allElements,
)
export const reorderingFormElement =
  (payload: orderingType) => (dispatch: AppDispatch, getState: () => RootState) => {
    const element = selectById(getState(), payload.elementId)
    const parentElement = selectById(getState(), payload.parentId)
    console.log('L14 element ===', element)
    if (element && parentElement) {
      let parentId = parentElement.id
      if (parentElement.type !== 'Layout') {
        parentId = element.parentId ?? ''
      }
      const newEl: IFormElement | IGroupElement = { ...element, parentId }
      console.log('L16 newEl ===', newEl)
      dispatch(formConstructorSlice.actions.reorderFormElements(newEl))
    }
  }
