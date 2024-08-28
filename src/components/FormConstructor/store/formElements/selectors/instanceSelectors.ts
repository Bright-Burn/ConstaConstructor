import type { AllElementTypes, FormInstance } from '../../../coreTypes'
import type { RootState } from '../../setupStore'
import { selectInstanceAll, selectInstanceById } from '../adapters'

import { getElementById } from './viewSelectors'

export const formInstanceSelector =
  <T extends FormInstance<AllElementTypes>['props']['type']>(id: string, type: T) =>
  (state: RootState): FormInstance<T> | null => {
    const elem = selectInstanceById(state, id)
    if (elem && elem.props.type === type) {
      return elem
    }
    return null
  }

export const formInstancePropsSelector =
  <T extends FormInstance<AllElementTypes>['props']['type']>(id: string, type: T) =>
  (state: RootState) => {
    const instance = formInstanceSelector(id, type)(state)
    return instance?.props
  }

export const formInstancesSelector =
  (ids: string[]) =>
  (state: RootState): FormInstance<AllElementTypes>[] => {
    const idsToFilter = new Set(ids)
    const allInstances = selectInstanceAll(state)
    return [...allInstances].filter(elem => idsToFilter.has(elem.id))
  }

/**
 * Возвращает props из Инстанса выбранного элемента
 */
export const getselectedViewPropsSelector = (state: RootState) => {
  const selectedViewId = state.formConstructor.selectedView?.elementId
  if (selectedViewId) {
    const selectPropsFromInstance = getInstanceProps(selectedViewId)
    return selectPropsFromInstance(state)
  }
}

/**
 * Возвращает функцию селектор для получения пропсов конкретного элемента(ссылки) из его инстанса
 */
export const getInstanceProps = (elementId: string) => (state: RootState) => {
  const element = getElementById(elementId)(state)
  if (element && element.instanceId) {
    const type: AllElementTypes = element.type
    const instance = formInstanceSelector<typeof type>(element.instanceId, type)(state)
    return instance?.props
  }
}
