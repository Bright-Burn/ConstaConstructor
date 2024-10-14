import type { BaseTypes } from './basePropsTypes'

// Общий тип для описания структуры пропсов в системе
export type InstanceProps<T, V> = {
  // Стили выбранной Ui библиотеки
  uiLibProps: T
  // Кстомные стили
  styles: V
} & BaseProps

// Базовые свойства - необходимы для формирования className
export type BaseProps = {
  className: string
  // Структура описывкающая отступы
  baseProps: BaseTypes
}
