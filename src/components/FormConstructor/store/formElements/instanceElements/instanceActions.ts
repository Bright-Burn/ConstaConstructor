import { Update } from '@reduxjs/toolkit'
import { AllElementTypes, FormInstance, UnionProps } from '../../../coreTypes'

import { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { LinkCountType } from './types'
import { getElementById } from '../formElementsSelectors'

export const setInstanceProps =
  (elementId: string, newProps: UnionProps) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const element = getElementById(elementId)(getState())
    if (element) {
      const updates: Update<FormInstance<AllElementTypes>> = {
        id: element.instanceId,
        changes: { props: newProps },
      }
      dispatch(formConstructorSlice.actions.updateFormInstance(updates))
    }
  }

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
