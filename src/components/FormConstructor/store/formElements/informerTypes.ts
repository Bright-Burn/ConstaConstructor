import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import { BaseProps, IFormElement } from './types'
import { iconNames } from './iconTypes'
import { IconComponent } from '@consta/uikit/Icon'

export type Props = {
  view?: InformerPropView
  status?: InformerPropStatus
  icon?: iconNames
  iconActive?: IconComponent
  label?: string
  title?: string
  size?: InformerPropSize
}
export type InformerElementProps = Props & BaseProps

export interface IFormElementInformer extends IFormElement {
  props: InformerElementProps
}
