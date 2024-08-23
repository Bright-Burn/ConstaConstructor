import type { BrandButtonProps, BrandTextFieldProps, BrandUserProps } from '../../../../coreTypes'

export type fillType = 'filled' | 'default'

export type FilledSettingsType = {
  elementId: string
  props: FilledProps
}

export type FilledProps = BrandTextFieldProps | BrandUserProps | BrandButtonProps
