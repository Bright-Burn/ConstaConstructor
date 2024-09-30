import type { BaseProps } from './types'

// Общий тип для описания структуры пропсов в системе
export type InstanceProps<T, V> = {
  // Стили Ui библиотеки
  uiLibProps: T
  // Кстомные стили
  styles: V
} & BaseProps
