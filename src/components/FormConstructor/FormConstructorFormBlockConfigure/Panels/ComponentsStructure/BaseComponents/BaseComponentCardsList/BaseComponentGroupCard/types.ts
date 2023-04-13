import { IBaseComponent } from '../../../../../../store/baseComponentsItems'
import { Values } from '../../../../../../utils'

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
} as const

export type GroupCardsTypes = Values<typeof GroupCards>
