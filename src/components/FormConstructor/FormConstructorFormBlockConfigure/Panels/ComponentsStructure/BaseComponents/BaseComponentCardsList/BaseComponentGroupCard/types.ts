import type { IBaseComponent } from '../../../../../../store/baseComponentsItems'
import type { Values } from '../../../../../../utils'

export interface IBaseComponentGroupCard {
  name: string
  baseComponents: IBaseComponent[]
}

export const GroupCards = {
  Headers: 'Headers',
  Others: 'Others',
  Dashboards: 'Dashboards',
  Forms: 'Forms',
  Bodies: 'Bodies',
  Cards: 'Cards',
  Tables: 'Tables',
  Footers: 'Footers',
} as const

export type GroupCardsTypes = Values<typeof GroupCards>
