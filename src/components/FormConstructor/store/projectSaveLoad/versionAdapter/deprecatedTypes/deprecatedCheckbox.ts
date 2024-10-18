import type { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'

import type { BaseProps } from '../../../../coreTypes'

export type CheckboxProps_Deprecated = {
  checked: boolean
  size?: CheckboxPropSize
  view?: CheckboxPropView
  align?: CheckboxPropAlign
  disabled?: boolean
  label?: string
  intermediate?: boolean
} & BaseProps
