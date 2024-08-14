import type { AllElementTypes, FormInstance } from '../../coreTypes'
import type { RootState } from '../setupStore'

import { getElementById } from './formElementsSelectors'
import { formInstanceAdapter } from './formInstanseAdapter'

const { selectById, selectAll } = formInstanceAdapter.getSelectors<RootState>(
  state => state.formConstructor.elementInstances,
)

const formInstanceSelector = <T extends FormInstance<AllElementTypes>['props']['type']>(
  id: string,
  type: T,
  state: RootState,
): FormInstance<T> | null => {
  const elem = selectById(state, id)
  if (elem && elem.props.type === type) {
    return elem
  }
  return null
}

export const formInstancePropsSelector =
  <T extends FormInstance<AllElementTypes>['props']['type']>(id: string, type: T) =>
  (state: RootState) => {
    const instance = formInstanceSelector(id, type, state)
    return instance?.props
  }

export const formInstancesSelector =
  (ids: string[]) =>
  (state: RootState): FormInstance<AllElementTypes>[] => {
    const idsToFilter = new Set(ids)
    const allInstances = selectAll(state)
    return [...allInstances].filter(elem => idsToFilter.has(elem.id))
  }

/**
 * Возвращает props из Инстанса выбранного элемента
 */
export const getSelectedElementPropsSelector = (state: RootState) => {
  const selectedElementId = state.formConstructor.selectedElement?.elementId
  if (selectedElementId) {
    const selectPropsFromInstance = getInstanceProps(selectedElementId)
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
    const instance = formInstanceSelector<typeof type>(element.instanceId, type, state)
    return instance?.props
  }
}

export const selectAllInstances = selectAll
