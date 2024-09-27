import type { AvatarAdapter } from './avatarAdapter'
import { avatarAdapter } from './avatarAdapter'
import type { AvatarGroupAdapter } from './avatarGroupAdapter'
import { avatarGroupAdapter } from './avatarGroupAdapter'
import type { BadgeAdapter } from './badgeAdapter'
import { badgeAdapter } from './badgeAdapter'
import type { ButtonAdapter } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'

export type TypeAdapter = {
  Button: ButtonAdapter
  Badge: BadgeAdapter
  Avatar: AvatarAdapter
  AvatarGroup: AvatarGroupAdapter
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
export const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
  Badge: badgeAdapter,
  Avatar: avatarAdapter,
  AvatarGroup: avatarGroupAdapter,
}
