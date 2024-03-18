import {
  cardMockId,
  customCardsTemplateMockId,
  dashboardMockId,
  footerWithSwitchMockId,
  gridMockId,
  placeholderMockId,
  rectangleMockId,
  simpleFormMockId,
  TableMockId,
  textMockId,
  wizardFormMockId,
} from '../../../../Elements'

import type { GroupCardsTypes } from './BaseComponentGroupCard'

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
