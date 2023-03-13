import { FC } from 'react'
import { FormElementTypes, FormGroupsTypes } from '../../store/formElements/types'
import { BadgeFormElement } from '../Elements/Badge'
import { ButtonFormElement } from '../Elements/ButtonFormElement'
import { CardFormElement } from '../Elements/CardFormElement'
import { CheckboxFormElement } from '../Elements/CheckboxFormElement'
import { HeaderWithBreadcrumbs } from '../Elements/HeaderWithBreadcrumbs'
import { InformerFormElement } from '../Elements/InformerFormElement'
import { LayoutFromElement } from '../Elements/LayoutFromElement'
import { TabsFormElement } from '../Elements/TabsFormElement'
import { TextFieldFormElement } from '../Elements/TextFieldFormElement'

export const FormGroupsDict: Record<FormGroupsTypes | FormElementTypes, FC<any>> = {
  LayoutOuter: LayoutFromElement,
  LayoutInner: LayoutFromElement,
  Button: ButtonFormElement,
  Badge: BadgeFormElement,
  Card: CardFormElement,
  Checkbox: CheckboxFormElement,
  HeaderWithBreadcrumbs: HeaderWithBreadcrumbs,
  Informer: InformerFormElement,
  Tabs: TabsFormElement,
  Text: TextFieldFormElement,
  TextField: TextFieldFormElement,
}
