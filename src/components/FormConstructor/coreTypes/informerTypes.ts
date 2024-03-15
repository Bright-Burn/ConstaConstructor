import type { IconComponent } from '@consta/icons/Icon'
import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type Props = {
  view?: InformerPropView
  status?: InformerPropStatus
  icon?: IconComponent
  label?: string
  title?: string
  size?: InformerPropSize
}
export type InformerElementProps = Props & BaseProps

export type InformerElement = ConcreteSelectedElement<typeof FormElementDictTypes.Informer>

export type BrandInformerElementProps = BrandProps<InformerElementProps, 'Informer'>

export interface IFormElementInformer extends IFormElement {
  props: BrandInformerElementProps
}
