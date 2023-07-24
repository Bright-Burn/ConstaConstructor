import { Props } from '@consta/uikit/Card'
import { BaseProps } from './types'

export type CardElementProps = Props

export interface CardElementPropsStyles extends BaseProps {
  constaProps: CardElementProps
  styles?: CardElementStyles
}

export interface CardElementStyles {
  width?: string
  height?: string
}
