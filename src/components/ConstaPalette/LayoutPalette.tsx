import { FC } from 'react'
import { ConstaPalette } from './ConstaPalette'
import { IConcreteConstaPalette, ConstaColor } from './types'

const layoutColors: ConstaColor[] = [
  'Null',
  'color-bg-default',
  'color-bg-secondary',
  'color-bg-brand',
  'color-bg-link',
  'color-bg-border',
  'color-bg-stripe',
  'color-bg-ghost',
  'color-bg-tone',
  'color-bg-soft',
  'color-bg-system',
  'color-bg-normal',
  'color-bg-success',
  'color-bg-caution',
  'color-bg-warning',
  'color-bg-alert',
  'color-bg-critical',
]

export const LayoutPalette: FC<IConcreteConstaPalette> = props => {
  return <ConstaPalette {...props} colorsToSelect={layoutColors} />
}
