import { IconComponent } from '@consta/icons/Icon'
import { InformerPropView, InformerPropStatus, InformerPropSize } from '@consta/uikit/Informer'
import { BaseProps } from '../../../../coreTypes'

type Props_Deprecated = {
  view?: InformerPropView
  status?: InformerPropStatus
  icon?: IconComponent
  label?: string
  title?: string
  size?: InformerPropSize
}

export type InformerElementProps_Deprecated = Props_Deprecated & BaseProps
