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
export const reorderFormElement =
  (payload: orderingType) => (dispatch: AppDispatch, getState: () => RootState) => {
    // Элемент, который перетаскивают
    const element = selectById(getState(), payload.elementId)
    // Элемент на который дропнули
    const targeElement = selectById(getState(), payload.parentId)
    // Выбранный элемент (если есть)
    const selectedElId = payload.selectedElId

    if (element && targeElement) {
      let parentId = targeElement.parentId
      const order = payload.left
        ? (targeElement.order + targeElement.order - 1) / 2
        : (targeElement.order + targeElement.order + 1) / 2
      // Если мы перетаскиваем в выбранный элемент и он является лэйаутом то parentId = выбранному элементу
      // т.е. мы сбрасываем перетаскиваемый элемент внутрь выбранного
      if (selectedElId === targeElement.id && targeElement.type === 'Layout') {
        parentId = payload.selectedElId
      }

      const newEl: IFormElement | IGroupElement = { ...element, parentId, order }
      dispatch(formConstructorSlice.actions.reorderFormElements(newEl))
    }
  }
