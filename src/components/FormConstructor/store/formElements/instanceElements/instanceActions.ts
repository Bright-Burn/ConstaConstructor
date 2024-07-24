import {
  AllElementTypes,
  FormInstance,
  IFormElement,
  IGroupElement,
  UnionProps,
} from '../../../coreTypes'

import { AppDispatch } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { LinkCountType } from './types'

/**
 * Создание нового инстанса
 */
export const createInstanceForElement =
  (instanceId: string, type: AllElementTypes, props: UnionProps) => (dispatch: AppDispatch) => {
    const formElemntInstance: FormInstance<typeof type> = {
      id: instanceId,
      props: props,
    }
    dispatch(formConstructorSlice.actions.addNewFormInstance(formElemntInstance))
    dispatch(
      formConstructorSlice.actions.changeElementLinkCount({
        id: instanceId,
        type: 'INC',
      }),
    )
  }

/**
 * Управление текущими инстансами
 */
export const manageInstanceLinkForElement =
  (instanceId: string, payloadType: LinkCountType) => (dispatch: AppDispatch) => {
    dispatch(
      formConstructorSlice.actions.changeElementLinkCount({
        id: instanceId,
        type: payloadType,
      }),
    )
  }
