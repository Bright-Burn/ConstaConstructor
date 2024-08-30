import type { IconComponent } from '@consta/icons/Icon'
import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
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

export type InformerElement = ConcreteSelectedView<typeof FormElementDictTypes.Informer>

export type BrandInformerElementProps = BrandProps<InformerElementProps, 'Informer'>

export type IFormElementInformer = OmitInstanceId<
  IFormElement & {
    props: BrandInformerElementProps
  }
>
