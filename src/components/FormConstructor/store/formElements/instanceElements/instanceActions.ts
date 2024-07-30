import type { Update } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, UnionProps } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { getInstanceProps } from '../formInstanceSelectors'

import type { ChangeElementLinkCountPayload, CrateInstancePayload } from './types'

/* Устанавливает props для instance*/
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
 * Создает новый инстанс для элемента
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
 * Добавляет новый инстанс (не создает новый)
 **/
export const addInstances =
  (formInstances: FormInstance<AllElementTypes>[]) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.addNewFormInstance(formInstances))
  }

/**
 * Управляет текущими инстансами
 */
export const manageInstanceLinkForElement =
  (payloads: ChangeElementLinkCountPayload[]) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.changeElementLinkCount(payloads))
  }
