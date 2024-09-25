import type { ButtonAdapterType } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'

export type TypeAdapter = {
  Button: ButtonAdapterType
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
export const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
}
