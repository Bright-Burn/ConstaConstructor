import { Update } from '@reduxjs/toolkit'
import { AllElementTypes, FormInstance, UnionProps } from '../../../coreTypes'

import { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { ChangeElementLinkCountPayload, CrateInstancePayload, LinkCountType } from './types'
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
  (createInstances: CrateInstancePayload[]) => (dispatch: AppDispatch) => {
    const formInstances: FormInstance<AllElementTypes>[] = []
    const changeLinksCountPayloads: ChangeElementLinkCountPayload[] = []
    createInstances.forEach(createPayload => {
      formInstances.push({
        id: createPayload.instanceId,
        props: createPayload.props,
      })
      changeLinksCountPayloads.push({
        id: createPayload.instanceId,
        type: 'INC',
      })
    })
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))
    dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))
  }

/**
 * Управление текущими инстансами
 */
export const manageInstanceLinkForElement =
  (payloads: ChangeElementLinkCountPayload[]) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.changeElementLinkCount(payloads))
  }
