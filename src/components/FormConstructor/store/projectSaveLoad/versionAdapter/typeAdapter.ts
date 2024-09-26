import type { BadgeAdapter } from './badgeAdapter'
import { badgeAdapter } from './badgeAdapter'
import type { ButtonAdapter } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'

export type TypeAdapter = {
  Button: ButtonAdapter
  Badge: BadgeAdapter
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
export const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
  Badge: badgeAdapter,
}
