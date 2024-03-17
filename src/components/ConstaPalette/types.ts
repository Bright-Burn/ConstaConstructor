type PropSize = 'm' | 'xs' | 's' | 'l'

export interface IConstaPalette {
  onChangeColor: (color: ConstaColor) => void
  colorsToSelect: ConstaColor[]
  color: ConstaColor | undefined
  size: PropSize
}

export interface IConcreteConstaPalette {
  onChangeColor: (color: ConstaColor) => void
  color: ConstaColor | undefined
  size: PropSize
}

export const ConstaColors = [
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
  'color-typo-primary',
  'color-typo-secondary',
  'color-typo-ghost',
  'color-typo-brand',
  'color-typo-system',
  'color-typo-normal',
  'color-typo-success',
  'color-typo-caution',
  'color-typo-warning',
  'color-typo-alert',
  'color-typo-critical',
  'color-typo-link',
  'color-typo-link-minor',
  'color-typo-link-hover',
  'color-scroll-bg',
  'color-scroll-thumb',
  'color-scroll-thumb-hover',
  'color-control-bg-default',
  'color-control-typo-default',
  'color-control-typo-placeholder',
  'color-control-bg-border-default',
  'color-control-bg-border-default-hover',
  'color-control-bg-border-focus',
  'color-control-bg-focus',
  'color-control-bg-active',
  'color-control-bg-primary',
  'color-control-bg-primary-hover',
  'color-control-typo-primary',
  'color-control-typo-primary-hover',
  'color-control-bg-secondary',
  'color-control-bg-border-secondary',
  'color-control-bg-border-secondary-hover',
  'color-control-typo-secondary',
  'color-control-typo-secondary-hover',
  'color-control-bg-ghost',
  'color-control-bg-ghost-hover',
  'color-control-typo-ghost',
  'color-control-typo-ghost-hover',
  'color-control-bg-clear',
  'color-control-bg-clear-hover',
  'color-control-typo-clear',
  'color-control-typo-clear-hover',
  'color-control-bg-disable',
  'color-control-bg-border-disable',
  'color-control-typo-disable',
  'color-shadow-group-1',
  'color-shadow-group-2',
  'color-shadow-layer-1',
  'color-shadow-layer-2',
  'color-shadow-modal-1',
  'color-shadow-modal-2',
] as const

export type ConstaColor = (typeof ConstaColors)[number]
