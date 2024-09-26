import type { BadgeAdapter } from './badgeAdapter'
import { badgeAdapter } from './badgeAdapter'
import type { ButtonAdapterType } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'

export type TypeAdapter = {
  Button: ButtonAdapterType
  Badge: BadgeAdapter
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
export const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
  Badge: badgeAdapter,
}
