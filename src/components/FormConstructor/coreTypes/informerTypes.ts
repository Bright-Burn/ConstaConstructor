import type { IconComponent } from '@consta/icons/Icon'
import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type { IconNames } from './iconTypes'
import type { InstanceProps } from './instanceProps'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  view?: InformerPropView
  status?: InformerPropStatus
  icon?: IconNames
  label?: string
  title?: string
  size?: InformerPropSize
}

export type InformerElementProps = InstanceProps<UiLibProps, {}>

export type InformerElement = ConcreteSelectedView<typeof FormElementDictTypes.Informer>

export type BrandInformerElementProps = BrandProps<InformerElementProps, 'Informer'>

export type IFormElementInformer = OmitInstanceId<
  IFormElement & {
    props: BrandInformerElementProps
  }
>
