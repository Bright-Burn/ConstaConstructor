import type { BrandAvatarGroupProps } from './avatarGroupTypes'
import type { BrandAvatarProps } from './avatartTypes'
import type { BrandBadgeProps } from './badgeTypes'
import type { BrandButtonGroupProps, BrandButtonProps } from './buttonTypes'
import type { BrandCardPropsStyles } from './cardTypes'
import type { BrandCheckboxProps } from './checkboxTypes'
import type { BrandOwnChoiceGroupProps } from './ChoiceGroupTypes'
import type { BrandComboboxProps } from './comboBoxTypes'
import type { BrandBreadcrumbsProps } from './crumbsTypes'
import type { BrandDateTimeProps } from './dataTimeTypes'
import type { BrandDatePickerProps } from './datePickerTypes'
import type { BrandEChartProps } from './echarts'
import type { BrandIconProps } from './iconTypes'
import type { BrandInformerElementProps } from './informerTypes'
import type { BrandLayoutElementPropsStyles } from './layoutTypes'
import type { BrandListProps } from './ListTypes'
import type { BrandRadioButtonProps } from './radioButtonTypes'
import type { BrandSelectProps } from './selectTypes'
import type { BrandSwitchProps } from './SwitchTypes'
import type { BrandTabsElementProps } from './tabsTypes'
import type { BrandTagProps } from './tagTypes'
import type { BrandTextFieldProps } from './textFieldTypes'
import type { BrandTextProps } from './textTypes'
import type { AllElementTypes, FormElementTypes, FormGroupsTypes } from './types'
import type { BrandUserProps } from './userTypes'
type emptyObj = Record<string, never>

export type FormInstance<T extends AllElementTypes> = {
  id: string
  props: T extends 'Avatar'
    ? BrandAvatarProps
    : emptyObj & T extends 'Button'
      ? BrandButtonProps
      : emptyObj & T extends 'Badge'
        ? BrandBadgeProps
        : emptyObj & T extends 'Tabs'
          ? BrandTabsElementProps
          : emptyObj & T extends 'Informer'
            ? BrandInformerElementProps
            : emptyObj & T extends 'Checkbox'
              ? BrandCheckboxProps
              : emptyObj & T extends 'Text'
                ? BrandTextProps
                : emptyObj & T extends 'TextField'
                  ? BrandTextFieldProps
                  : emptyObj & T extends 'List'
                    ? BrandListProps
                    : emptyObj & T extends 'RadioButton'
                      ? BrandRadioButtonProps
                      : emptyObj & T extends 'Switch'
                        ? BrandSwitchProps
                        : emptyObj & T extends 'DatePicker'
                          ? BrandDatePickerProps
                          : emptyObj & T extends 'ComboBox'
                            ? BrandComboboxProps
                            : emptyObj & T extends 'SelectForm'
                              ? BrandSelectProps
                              : emptyObj & T extends 'DataTime'
                                ? BrandDateTimeProps
                                : emptyObj & T extends 'User'
                                  ? BrandUserProps
                                  : emptyObj & T extends 'Icon'
                                    ? BrandIconProps
                                    : emptyObj & T extends 'Tag'
                                      ? BrandTagProps
                                      : emptyObj & T extends 'BreadcrumbsFormElement'
                                        ? BrandBreadcrumbsProps
                                        : emptyObj & T extends 'ChoiceGroup'
                                          ? BrandOwnChoiceGroupProps
                                          : emptyObj & T extends 'AvatarGroup'
                                            ? BrandAvatarGroupProps
                                            : T extends 'Layout'
                                              ? BrandLayoutElementPropsStyles
                                              : emptyObj & T extends 'Card'
                                                ? BrandCardPropsStyles
                                                : emptyObj & T extends 'EChart'
                                                  ? BrandEChartProps
                                                  : emptyObj & T extends 'ButtonModal'
                                                    ? BrandButtonGroupProps
                                                    : never
}

export type UnionProps =
  | FormInstance<FormElementTypes>['props']
  | FormInstance<FormGroupsTypes>['props']

export type InstanceManager = Record<string, number>
