import { cardMockId } from '../../../../Elements/CardWithBarChart'
import { customCardsTemplateMockId } from '../../../../Elements/CustomCardsTemplate'
import { dashboardMockId } from '../../../../Elements/Dashboard'
import { headerGeologistId } from '../../../../Elements/HeaderCognitiveGeologist'
import { headerMockId } from '../../../../Elements/HeaderWithBreadcrumbs'
import { headerWithStatusMockId } from '../../../../Elements/HeaderWithStatus'
import { gridMockId } from '../../../../Elements/ProjectGrid'
import { simpleFormMockId } from '../../../../Elements/SimpleForm'
import { wizardFormMockId } from '../../../../Elements/WizardForm/mocks'
import { GroupCardsTypes } from './BaseComponentGroupCard/types'
import { PlaceViolationMockId } from '../../../../Elements/FormTwoColumns'

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
  [PlaceViolationMockId]: 'Forms',
}
