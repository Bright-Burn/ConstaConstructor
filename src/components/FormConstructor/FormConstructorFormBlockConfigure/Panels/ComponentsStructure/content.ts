import type { ComponentsTabItem } from './types'

export const componentsTabItems: ComponentsTabItem[] = [
  {
    label: 'Сетки',
  },
  {
    label: 'Компоненты',
  },
  {
    label: 'Загрузки',
  },
]
export enum EChoiceItems {
  Tree = 'Tree',
  Components = 'Components',
}
export const choiceItems: EChoiceItems[] = [EChoiceItems.Tree, EChoiceItems.Components]
