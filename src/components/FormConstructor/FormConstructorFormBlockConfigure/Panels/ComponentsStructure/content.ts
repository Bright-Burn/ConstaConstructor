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
export const ChoiceItems = {
  Tree: 'Tree',
  Components: 'Components',
} as const
export const choiceItems: (keyof typeof ChoiceItems)[] = ['Components', 'Tree']
