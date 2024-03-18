import { cardMockId } from '../../../../Elements/CardWithBarChart'
import { customCardsTemplateMockId } from '../../../../Elements/CustomCardsTemplate'
import { dashboardMockId } from '../../../../Elements/Dashboard'
import { footerWithSwitchMockId } from '../../../../Elements/FooterWithSwitch/mocks'
import { placeholderMockId } from '../../../../Elements/PlaceholderFormElement/mocks'
import { gridMockId } from '../../../../Elements/ProjectGrid'
import { rectangleMockId } from '../../../../Elements/PrototypeRectangleElement/mocks'
import { textMockId } from '../../../../Elements/PrototypeTextElement/mocks'
import { simpleFormMockId } from '../../../../Elements/SimpleForm'
import { TableMockId } from '../../../../Elements/Table'
import { wizardFormMockId } from '../../../../Elements/WizardForm/mocks'

import type { GroupCardsTypes } from './BaseComponentGroupCard/types'

export const componentsDict: Record<string, GroupCardsTypes> = {
  [simpleFormMockId]: 'Forms',
  [wizardFormMockId]: 'Forms',
  [dashboardMockId]: 'Dashboards',
  [cardMockId]: 'Dashboards',
  [customCardsTemplateMockId]: 'Cards',
  [gridMockId]: 'Tables',
  [footerWithSwitchMockId]: 'Footers',
  [TableMockId]: 'Tables',
  [placeholderMockId]: 'Tables',
  [textMockId]: 'Tables',
  [rectangleMockId]: 'Tables',
}
