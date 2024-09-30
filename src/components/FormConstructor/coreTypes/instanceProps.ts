import { BaseProps } from './types'

// Общий тип для описания структуры пропсов в системе
export type InstanceProps<T, V> = {
  constaProps: T
  styles: V
} & BaseProps
