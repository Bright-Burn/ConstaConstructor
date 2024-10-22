import type { Props } from '@consta/uikit/Button'

import type { BaseProps, IconNames } from '../../../../coreTypes'

// Устарелывый тип для кнопки
export interface ButtonProps_Deprecated extends BaseProps, Props {
  icon?: IconNames
  iconR?: IconNames
  filled?: boolean
}
