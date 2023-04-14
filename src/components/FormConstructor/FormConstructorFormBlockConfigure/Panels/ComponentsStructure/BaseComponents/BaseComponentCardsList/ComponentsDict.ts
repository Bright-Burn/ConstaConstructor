import { cardMockId } from "../../../../Elements/CardWithBarChart";
import { customCardsTemplateMockId } from "../../../../Elements/CustomCardsTemplate";
import { dashboardMockId } from "../../../../Elements/Dashboard";
import { headerGeologistId } from "../../../../Elements/HeaderCognitiveGeologist";
import { headerMockId } from "../../../../Elements/HeaderWithBreadcrumbs";
import { headerWithStatusMockId } from "../../../../Elements/HeaderWithStatus";
import { gridMockId } from "../../../../Elements/ProjectGrid";
import { simpleFormMockId } from "../../../../Elements/SimpleForm";
import { GroupCardsTypes } from "./BaseComponentGroupCard/types";

export const componentsDict: Record<string, GroupCardsTypes> = {
    [headerMockId]: 'Headers',
    [headerGeologistId]: 'Headers',
    [headerWithStatusMockId]: 'Headers',
    [simpleFormMockId]: 'Forms',
    [dashboardMockId]: 'Dashboards',
    [cardMockId]: 'Dashboards',
    [customCardsTemplateMockId]: 'Cards',
    [gridMockId]: "Tables",
}