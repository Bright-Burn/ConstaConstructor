import { FC } from 'react'
import { FormElementTypes, FormGroupsTypes } from '../../store/formElements/types'
import { BadgeFormElement } from '../Elements/Badge'
import { ButtonFormElement } from '../Elements/ButtonFormElement'
import { CardFormElement } from '../Elements/CardFormElement'
import { CheckboxFormElement } from '../Elements/CheckboxFormElement'
import { HeaderWithBreadcrumbs } from '../Elements/HeaderWithBreadcrumbs'
import { HeaderWithStatus } from '../Elements/HeaderWithStatus'
import { InformerFormElement } from '../Elements/InformerFormElement'
import { LayoutFromElement } from '../Elements/LayoutFromElement'
import { ProjectGrid } from '../Elements/ProjectGrid'
import { TabsFormElement } from '../Elements/TabsFormElement'
import { TextFieldFormElement } from '../Elements/TextFieldFormElement'
import { PlaceholderFormElement } from '../Elements/PlaceholderFormElement'
import { CardWithBarChart } from '../Elements/CardWithBarChart'
import { HeaderCognitiveGeologist } from '../Elements/HeaderCognitiveGeologist'
import { Dashboard } from "../Elements/Dashboard";

export const FormGroupsDict: Record<FormGroupsTypes | FormElementTypes, FC<any>> = {
  Layout: LayoutFromElement,
  Button: ButtonFormElement,
  Badge: BadgeFormElement,
  Card: CardFormElement,
  Checkbox: CheckboxFormElement,
  HeaderWithBreadcrumbs: HeaderWithBreadcrumbs,
  HeaderWithStatus: HeaderWithStatus,
  HeaderCognitiveGeologist: HeaderCognitiveGeologist,
  Informer: InformerFormElement,
  Tabs: TabsFormElement,
  Text: TextFieldFormElement,
  TextField: TextFieldFormElement,
  Placeholder: PlaceholderFormElement,
  CardWithBarChart: CardWithBarChart,
  ProjectGrid: ProjectGrid,
  Dashboard: Dashboard,
}
