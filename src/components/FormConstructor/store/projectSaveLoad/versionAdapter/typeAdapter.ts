import type { AvatarAdapter } from './avatarAdapter'
import { avatarAdapter } from './avatarAdapter'
import type { AvatarGroupAdapter } from './avatarGroupAdapter'
import { avatarGroupAdapter } from './avatarGroupAdapter'
import type { BadgeAdapter } from './badgeAdapter'
import { badgeAdapter } from './badgeAdapter'
import type { BreadCrumbsAdapter } from './breadCrumbsAdapter'
import { breadCrumbsAdapter } from './breadCrumbsAdapter'
import type { ButtonAdapter } from './buttonAdapter'
import { buttonAdapter } from './buttonAdapter'
import type { CardAdapter } from './cardAdapter'
import { cardAdapter } from './cardAdapter'
import type { CheckBoxAdapter } from './checkBoxAdapter'
import { checkBoxAdapter } from './checkBoxAdapter'
import type { ChoiceGroupAdapter } from './choiceGroupAdapter'
import { choiceGroupAdapter } from './choiceGroupAdapter'
import type { ComboboxAdaper } from './comboboxAdapter'
import { comboboxAdapter } from './comboboxAdapter'
import type { LayoutAdapter } from './layoutAdapter'
import { layoutAdapter } from './layoutAdapter'

export type TypeAdapter = {
  Button: ButtonAdapter
  Badge: BadgeAdapter
  Avatar: AvatarAdapter
  AvatarGroup: AvatarGroupAdapter
  BreadcrumbsFormElement: BreadCrumbsAdapter
  Layout: LayoutAdapter
  Card: CardAdapter
  Checkbox: CheckBoxAdapter
  ComboBox: ComboboxAdaper
  ChoiceGroup: ChoiceGroupAdapter
}

// Адаптер для старых макетов, сюда подключаются адаптеры для конкретных элементов
export const typeAdapterDict: TypeAdapter = {
  Button: buttonAdapter,
  Badge: badgeAdapter,
  Avatar: avatarAdapter,
  AvatarGroup: avatarGroupAdapter,
  BreadcrumbsFormElement: breadCrumbsAdapter,
  Layout: layoutAdapter,
  Card: cardAdapter,
  Checkbox: checkBoxAdapter,
  ComboBox: comboboxAdapter,
  ChoiceGroup: choiceGroupAdapter,
}
