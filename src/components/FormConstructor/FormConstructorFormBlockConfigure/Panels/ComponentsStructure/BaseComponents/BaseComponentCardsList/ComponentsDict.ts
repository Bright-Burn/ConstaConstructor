import { cardMockId } from '../../../../Elements/CardWithBarChart'
import { customCardsTemplateMockId } from '../../../../Elements/CustomCardsTemplate'
import { dashboardMockId } from '../../../../Elements/Dashboard'
import { ExpertiseFormMockId } from '../../../../Elements/ExpertiseForm'
import { footerWithSwitchMockId } from '../../../../Elements/FooterWithSwitch/mocks'
import { FormWithTwoColumnsMockId } from '../../../../Elements/FormWithTwoColumns'
import { headerGeologistId } from '../../../../Elements/HeaderCognitiveGeologist'
import { headerMockId } from '../../../../Elements/HeaderWithBreadcrumbs'
import { headerWithStatusMockId } from '../../../../Elements/HeaderWithStatus'
import { placeholderMockId } from '../../../../Elements/PlaceholderFormElement/mocks'
import { gridMockId } from '../../../../Elements/ProjectGrid'
import { rectangleMockId } from '../../../../Elements/PrototypeRectangleElement/mocks'
import { textMockId } from '../../../../Elements/PrototypeTextElement/mocks'
import { simpleFormMockId } from '../../../../Elements/SimpleForm'
import { TableMockId } from '../../../../Elements/Table'
import { wizardFormMockId } from '../../../../Elements/WizardForm/mocks'

import type { GroupCardsTypes } from './BaseComponentGroupCard/types'

export const componentsDict: Record<string, GroupCardsTypes> = {
  [headerMockId]: 'Headers',
  [headerGeologistId]: 'Headers',
  [headerWithStatusMockId]: 'Headers',
  [simpleFormMockId]: 'Forms',
  [wizardFormMockId]: 'Forms',
  [dashboardMockId]: 'Dashboards',
  [cardMockId]: 'Dashboards',
  [customCardsTemplateMockId]: 'Cards',
  [gridMockId]: 'Tables',
  [footerWithSwitchMockId]: 'Footers',
  [FormWithTwoColumnsMockId]: 'Forms',
  [TableMockId]: 'Tables',
  [ExpertiseFormMockId]: 'Tables',
  [placeholderMockId]: 'Tables',
  [textMockId]: 'Tables',
  [rectangleMockId]: 'Tables',
}
