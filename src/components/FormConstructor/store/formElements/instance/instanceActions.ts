import { FormInstance, IFormElement, IGroupElement } from '../../../coreTypes'
import { AllProps } from '../../../coreTypes/formInstance'
import { AppDispatch } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { LinkCountType } from './types'

/**
 * Создание нового инстанса
 */
export const createInstanceForElement =
  (element: IFormElement | IGroupElement, props: AllProps) => (dispatch: AppDispatch) => {
    const formElemntInstance: FormInstance<typeof element.type> = {
      id: element.instanceId,
      props: props,
    }
    dispatch(formConstructorSlice.actions.addNewFormInstance(formElemntInstance))
    dispatch(
      formConstructorSlice.actions.changeElementLinkCount({
        id: element.instanceId,
        type: 'INC',
      }),
    )
  }

/**
 * Управление текущими инстансами
 */
export const manageInstanceLinkForElement =
  (element: IFormElement | IGroupElement, payloadType: LinkCountType) =>
  (dispatch: AppDispatch) => {
    dispatch(
      formConstructorSlice.actions.changeElementLinkCount({
        id: element.instanceId,
        type: payloadType,
      }),
    )
  }
