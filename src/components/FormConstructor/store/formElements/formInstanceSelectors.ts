import type { AllElementTypes, FormInstance } from '../../coreTypes'
import type { RootState } from '../setupStore'

import { getElementById } from './formElementsSelectors'
import { formInstanceAdapter } from './formInstanseAdapter'

const { selectById } = formInstanceAdapter.getSelectors<RootState>(
  state => state.formConstructor.elmentInstances,
)

export const formInstanceSelector =
  <T extends FormInstance<AllElementTypes>['props']['type']>(id: string, type: T) =>
  (state: RootState): FormInstance<T> | null => {
    const elem = selectById(state, id)
    if (elem && elem.props.type === type) {
      return elem
    }
    return null
  }
/**
 * Возвращает props из Инстанса выбранного элемента
 */
export const getSelectedElementProps = (state: RootState) => {
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
    const type = element.type
    const instance: FormInstance<typeof type> | undefined = formInstanceSelector(
      element.instanceId,
    )(state)
    return instance?.props
  }
}
