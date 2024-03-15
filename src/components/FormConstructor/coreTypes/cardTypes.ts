import type { Props } from '@consta/uikit/Card'

import type { BaseProps, BrandProps, ConcreteSelectedElement, FormGroupsDictTypes } from './types'

export type CardElementProps = Props

export interface CardElementPropsStyles extends BaseProps {
  constaProps: CardElementProps
  styles?: CardElementStyles
}

export type BrandCardElementPropsStyles = BrandProps<CardElementPropsStyles, 'Card'>

export type CardElement = ConcreteSelectedElement<typeof FormGroupsDictTypes.Card>

export interface CardElementStyles {
  width?: string
  height?: string
}
