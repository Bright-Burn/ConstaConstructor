import type { IconComponent } from '@consta/icons/Icon'
import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type { BaseProps } from '../../../../coreTypes'

type Props_Deprecated = {
  view?: InformerPropView
  status?: InformerPropStatus
  icon?: IconComponent
  label?: string
  title?: string
  size?: InformerPropSize
}

export type InformerElementProps_Deprecated = Props_Deprecated & BaseProps
