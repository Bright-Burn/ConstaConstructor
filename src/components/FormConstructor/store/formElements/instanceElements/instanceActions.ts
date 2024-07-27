import type { Update } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, UnionProps } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { getInstanceProps } from '../formInstanceSelectors'

import type { ChangeElementLinkCountPayload, CrateInstancePayload } from './types'

export const setInstanceProps =
  (elementId: string, newProps: UnionProps) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const element = getElementById(elementId)(state)
    const prevProps = getInstanceProps(elementId)(state)
    if (element) {
      const updates: Update<FormInstance<AllElementTypes>> = {
        id: element.instanceId,
        changes: { props: newProps },
      }
      dispatch(formConstructorSlice.actions.updateFormInstance(updates))
      dispatch(
        pushHistoryElement(() => {
          dispatch(
            formConstructorSlice.actions.updateFormInstance({
              id: element.instanceId,
              changes: { props: prevProps },
            }),
          )
        }),
      )
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
