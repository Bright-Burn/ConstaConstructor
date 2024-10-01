import type { Props } from '@consta/uikit/Card'

import type { InstanceProps } from './instanceProps'
import type { BrandProps, ConcreteSelectedView, FormGroupsDictTypes } from './types'

export type CardProps = InstanceProps<Props, CardElementStyles>

export type BrandCardPropsStyles = BrandProps<CardProps, 'Card'>

export type CardElement = ConcreteSelectedView<typeof FormGroupsDictTypes.Card>

export interface CardElementStyles {
  width?: string
  height?: string
}
