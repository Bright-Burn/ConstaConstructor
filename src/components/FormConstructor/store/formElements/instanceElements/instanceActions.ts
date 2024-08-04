import type { Update } from '@reduxjs/toolkit'

import type { AllElementTypes, FormInstance, UnionProps } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { getElementById } from '../formElementsSelectors'
import { formConstructorSlice } from '../formElementsSlice'
import { getInstanceProps } from '../formInstanceSelectors'

import type { ChangeElementLinkCountPayload } from './types'

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
