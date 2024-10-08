import type { UnionProps } from '../../../../coreTypes'

import type { ConstaPropsStyles } from './buildConstaPropsCommon'

// @ts-expect-error Временное решение, убрать игнор, когда у всех компонентов появится constaProps
export const constaPropsAdapterCommon = (props: UnionProps['props']['constaProps']) => {
  const constaProps: ConstaPropsStyles = {}

  // Преобразуем к типу аргумента функции билдера
  Object.entries(props).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      constaProps[key] = ''
    } else if (value !== null && value !== undefined && typeof value !== 'object') {
      constaProps[key] = `${value}`
    }
  })
  return constaProps
}
