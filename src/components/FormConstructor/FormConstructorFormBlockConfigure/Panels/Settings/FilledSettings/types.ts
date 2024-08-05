import type { IconComponent } from '@consta/icons/Icon'

import type { BrandButtonProps, BrandTextFieldProps, BrandUserProps } from '../../../../coreTypes'

export type fillType = {
  name: string
  icon: IconComponent
}

export type FilledSettingsType = {
  elementId: string
  props: FilledProps
}

export type FilledProps = BrandTextFieldProps | BrandUserProps | BrandButtonProps
