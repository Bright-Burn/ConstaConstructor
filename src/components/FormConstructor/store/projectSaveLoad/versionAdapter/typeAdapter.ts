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
import type { DatePickerAdapter } from './datePickerAdpter'
import { datePickerAdapter } from './datePickerAdpter'
import type { DateTimeAdapter } from './dateTimeAdapter'
import { dateTimeAdapter } from './dateTimeAdapter'
import type { InformerAdapter } from './informerAdapter'
import { informerAdapter } from './informerAdapter'
import type { LayoutAdapter } from './layoutAdapter'
import { layoutAdapter } from './layoutAdapter'
import type { ListAdapter } from './listAdapter'
import { listAdapter } from './listAdapter'
import type { RadioButtonAdapter } from './radioButtonAdapter'
import { radioButtonAdapter } from './radioButtonAdapter'
import type { SelectAdapter } from './selectAdapter'
import { selectAdapter } from './selectAdapter'
import type { SwitchAdapter } from './switchAdapter'
import { switchAdapter } from './switchAdapter'
import type { TabsAdapter } from './tabsAdapter'
import { tabsAdapter } from './tabsAdapter'
import type { TagsAdapter } from './tagsAdapter'
import { tagsAdapter } from './tagsAdapter'

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
  DatePicker: DatePickerAdapter
  DataTime: DateTimeAdapter
  Informer: InformerAdapter
  List: ListAdapter
  RadioButton: RadioButtonAdapter
  SelectForm: SelectAdapter
  Switch: SwitchAdapter
  Tabs: TabsAdapter
  Tag: TagsAdapter
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
  DatePicker: datePickerAdapter,
  DataTime: dateTimeAdapter,
  Informer: informerAdapter,
  List: listAdapter,
  RadioButton: radioButtonAdapter,
  SelectForm: selectAdapter,
  Switch: switchAdapter,
  Tabs: tabsAdapter,
  Tag: tagsAdapter,
}
