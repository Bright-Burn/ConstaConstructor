import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

import type { BaseProps } from '../../../../coreTypes'

export type SwitchProps_Deprecated = {
  size?: SwitchPropSize
  view?: SwitchPropView
  align?: SwitchPropAlign
  label?: string
  checked?: boolean
  disabled?: boolean
} & BaseProps
