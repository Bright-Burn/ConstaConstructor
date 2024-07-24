import { BrandAvatarGroupProps } from './avatarGroupTypes'
import { BrandAvatarProps } from './avatartTypes'
import { BrandBadgeProps } from './badgeTypes'
import { BrandBreadcrumbsProps } from './BreadcrumbsTypes'
import { BrandButtonProps, BrandButtonGroupProps } from './buttonTypes'
import { BrandCardElementPropsStyles } from './cardTypes'
import { BrandCardWithChartProps } from './cardWithBarChartTypes'
import { BrandCheckboxProps } from './checkboxTypes'
import { BrandOwnChoiceGroupProps } from './ChoiceGroupTypes'
import { BrandComboboxProps } from './comboBoxTypes'
import { BrandDashboardProps } from './dashboardTypes'
import { BrandDataTimeProps } from './dataTimeTypes'
import { BrandDatePickerProps } from './datePickerTypes'
import { BrandFooterWithSwitchProps } from './footerWithSwitchTypes'
import { BrandIconProps } from './iconTypes'
import { BrandInformerElementProps } from './informerTypes'
import { BrandLayoutElementPropsStyles } from './layoutTypes'
import { BrandListProps } from './ListTypes'
import { BrandPlaceholderProps } from './placeholderTypes'
import { BrandPrototypeTextProps, BrandPrototypeRectangleProps } from './prototypeTypes'
import { BrandRadioButtonProps } from './radioButtonTypes'
import { BrandSelectProps } from './selectTypes'
import { BrandSimpleFormProps } from './simpleFormTypes'
import { BrandSwitchProps } from './SwitchTypes'
import { BrandTableProps } from './tableTypes'
import { BrandTabsElementProps } from './tabsTypes'
import { BrandTagProps } from './tagTypes'
import { BrandTextFieldProps } from './textFieldTypes'
import { BrandTextElementProps } from './textTypes'
import { AllElementTypes, FormElementTypes, FormGroupsTypes } from './types'
import { BrandUserProps } from './userTypes'
import { BrandWizardFromProps } from './wizardFormTypes'
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
                ? BrandTextElementProps
                : emptyObj & T extends 'TextField'
                  ? BrandTextFieldProps
                  : emptyObj & T extends 'Table'
                    ? BrandTableProps
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
                                  ? BrandDataTimeProps
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
                                            : emptyObj & T extends 'ProjectGrid'
                                              ? emptyObj
                                              : emptyObj & T extends 'Placeholder'
                                                ? BrandPlaceholderProps
                                                : emptyObj & T extends 'CardWithBarChart'
                                                  ? BrandCardWithChartProps
                                                  : emptyObj & T extends 'Dashboard'
                                                    ? BrandDashboardProps
                                                    : emptyObj & T extends 'SimpleForm'
                                                      ? BrandSimpleFormProps
                                                      : emptyObj & T extends 'WizardForm'
                                                        ? BrandWizardFromProps
                                                        : emptyObj & T extends 'FooterWithSwitch'
                                                          ? BrandFooterWithSwitchProps
                                                          : emptyObj &
                                                                T extends 'PrototypeTextElement'
                                                            ? BrandPrototypeTextProps
                                                            : emptyObj &
                                                                  T extends 'PrototypeRectangleElement'
                                                              ? BrandPrototypeRectangleProps
                                                              : emptyObj & T extends 'AvatarGroup'
                                                                ? BrandAvatarGroupProps
                                                                : T extends 'Layout'
                                                                  ? BrandLayoutElementPropsStyles
                                                                  : emptyObj & T extends 'Card'
                                                                    ? BrandCardElementPropsStyles
                                                                    : emptyObj &
                                                                          T extends 'ButtonModal'
                                                                      ? BrandButtonGroupProps
                                                                      : never
}

export type UnionProps =
  | FormInstance<FormElementTypes>['props']
  | FormInstance<FormGroupsTypes>['props']

export type InstanceManager = Record<string, number>
