import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import { BaseProps, BrandProps, ConcreteSelectedElement, FormElementDictTypes, IFormElement } from './types'
import { IconComponent } from '@consta/icons/Icon'

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
