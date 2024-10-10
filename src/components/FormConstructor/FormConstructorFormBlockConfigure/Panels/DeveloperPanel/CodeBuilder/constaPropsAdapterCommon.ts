import type { UnionProps } from '../../../../coreTypes'

import type { UiLibProps } from './buildConstaPropsCommon'

// @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится constaProps
export const constaPropsAdapterCommon = (props: UnionProps['props']['uiLibProps']) => {
  const uiLibProps: UiLibProps = {}

  // Преобразуем к типу аргумента функции билдера
  Object.entries(props).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Если массив, то устанавливаем пустой массив
      uiLibProps[key] = []
    } else if (typeof value === 'object') {
      // Если объект, то устанавливаем пустой объект
      uiLibProps[key] = {}
    } else if (value !== null && value !== undefined) {
      uiLibProps[key] = value
    }
  })
  return uiLibProps
}
