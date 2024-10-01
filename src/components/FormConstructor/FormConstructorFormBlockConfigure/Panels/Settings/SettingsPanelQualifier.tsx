import type { FC } from 'react'
import { Text } from '@consta/uikit/Text'

import type {
  BrandAvatarGroupProps,
  BrandAvatarProps,
  BrandBadgeProps,
  BrandBreadcrumbsProps,
  BrandButtonGroupProps,
  BrandButtonProps,
  BrandCardPropsStyles,
  BrandCheckboxProps,
  BrandComboboxProps,
  BrandDataTimeProps,
  BrandDatePickerProps,
  BrandEChartProps,
  BrandIconProps,
  BrandInformerElementProps,
  BrandLayoutElementPropsStyles,
  BrandListProps,
  BrandOwnChoiceGroupProps,
  BrandRadioButtonProps,
  BrandSelectProps,
  BrandSwitchProps,
  BrandTabsElementProps,
  BrandTagProps,
  BrandTextElementProps,
  BrandTextFieldProps,
  BrandUserProps,
  IselectedView,
  UnionProps,
} from '../../../coreTypes'
import { FormElementDictTypes, FormGroupsDictTypes } from '../../../coreTypes'
import { NotFound } from '../../../SharedComponents'
import { getSelectedView, getSelectedViewPropsSelector, useAppSelector } from '../../../store'
import { isElementProps } from '../../../utils'

import { AvatarGroupSettings } from './AvatarGroupSettings'
import { AvatarSettings } from './AvatarSettings'
import { BadgeSettings } from './BadgeSettings'
import { BaseSettings } from './BaseSettings'
import { BreadcrumbsSettings } from './BreadcrumbsSettings'
import { ButtonModuleSettings } from './ButtonModalSettings'
import { ButtonSettings } from './ButtonSettings'
import { CardSettings } from './CardSettings'
import { CheckboxSettings } from './CheckboxSettings'
import { ChoiceGroupSettings } from './ChoiceGroupSettings'
import { ComboBoxSettings } from './ComboBoxSettings'
import { DataTimeSettings } from './DataTimeSettings'
import { DatePickerSettings } from './DatePickerSettings'
import { EChartSettings } from './EChartSettings'
import { IconSettings } from './IconSettings'
import { InformerSettings } from './InformerSettings'
import { LabelSetting } from './LabelSetting'
import { LayoutSettings } from './LayoutSettings'
import { ListSettings } from './ListSettings'
import { RadioButtonSettings } from './RadioButtonSettings'
import { SelectSettings } from './SelectSettings'
import { SwitchSettings } from './SwitchSettings'
import { TabsSettings } from './TabsSettings'
import { TagSettings } from './TagSettings'
import { TextFieldSettings } from './TextFieldSettings'
import { TextSettings } from './TextSettings'
import { UserSettings } from './UserSettings'

import styles from './styles.module.css'

const getSettingsPanel = (selectedViewProps: UnionProps, selectedView: IselectedView) => {
  switch (selectedView.elementType) {
    case FormElementDictTypes.AvatarGroup: {
      if (!isElementProps<BrandAvatarGroupProps>(selectedViewProps, 'AvatarGroup')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <AvatarGroupSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Avatar: {
      if (!isElementProps<BrandAvatarProps>(selectedViewProps, 'Avatar')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <AvatarSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Text: {
      if (!isElementProps<BrandTextElementProps>(selectedViewProps, 'Text')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <TextSettings selectedProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Informer: {
      if (!isElementProps<BrandInformerElementProps>(selectedViewProps, 'Informer')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <InformerSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Badge: {
      if (!isElementProps<BrandBadgeProps>(selectedViewProps, 'Badge')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <BadgeSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormGroupsDictTypes.Layout: {
      if (!isElementProps<BrandLayoutElementPropsStyles>(selectedViewProps, 'Layout')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <LayoutSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormGroupsDictTypes.Card: {
      if (!isElementProps<BrandCardPropsStyles>(selectedViewProps, 'Card')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <CardSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormGroupsDictTypes.ButtonModal: {
      if (!isElementProps<BrandButtonGroupProps>(selectedViewProps, 'ButtonModal')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <ButtonModuleSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
      )
    }
    case FormElementDictTypes.Tabs: {
      if (!isElementProps<BrandTabsElementProps>(selectedViewProps, 'Tabs')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <TabsSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Checkbox: {
      if (!isElementProps<BrandCheckboxProps>(selectedViewProps, 'Checkbox')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <CheckboxSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.TextField: {
      if (!isElementProps<BrandTextFieldProps>(selectedViewProps, 'TextField')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <TextFieldSettings selectedViewProps={selectedViewProps} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.List: {
      if (!isElementProps<BrandListProps>(selectedViewProps, 'List')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <ListSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.RadioButton: {
      if (!isElementProps<BrandRadioButtonProps>(selectedViewProps, 'RadioButton')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <RadioButtonSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Button: {
      if (!isElementProps<BrandButtonProps>(selectedViewProps, 'Button')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <ButtonSettings selectedViewProps={selectedViewProps} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Switch: {
      if (!isElementProps<BrandSwitchProps>(selectedViewProps, 'Switch')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <SwitchSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.DatePicker: {
      if (!isElementProps<BrandDatePickerProps>(selectedViewProps, 'DatePicker')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <DatePickerSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.ComboBox: {
      if (!isElementProps<BrandComboboxProps>(selectedViewProps, 'ComboBox')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <ComboBoxSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Select: {
      if (!isElementProps<BrandSelectProps>(selectedViewProps, 'SelectForm')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <SelectSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.DataTime: {
      if (!isElementProps<BrandDataTimeProps>(selectedViewProps, 'DataTime')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <DataTimeSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.BreadcrumbsForm: {
      if (!isElementProps<BrandBreadcrumbsProps>(selectedViewProps, 'BreadcrumbsFormElement')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }
      return (
        <>
          <BreadcrumbsSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.User: {
      if (!isElementProps<BrandUserProps>(selectedViewProps, 'User')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <UserSettings selectedViewProps={selectedViewProps} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Tag: {
      if (!isElementProps<BrandTagProps>(selectedViewProps, 'Tag')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <TagSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.ChoiceGroup: {
      if (!isElementProps<BrandOwnChoiceGroupProps>(selectedViewProps, 'ChoiceGroup')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <ChoiceGroupSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
          <BaseSettings />
        </>
      )
    }
    case FormElementDictTypes.Icon: {
      if (!isElementProps<BrandIconProps>(selectedViewProps, 'Icon')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return <IconSettings selectedViewProps={selectedViewProps.props} selectedView={element} />
    }
    case FormElementDictTypes.EChart: {
      if (!isElementProps<BrandEChartProps>(selectedViewProps, 'EChart')) {
        return
      }
      const element = {
        elementId: selectedView.elementId,
        elementType: selectedView.elementType,
      }

      return (
        <>
          <EChartSettings
            selectedViewProps={selectedViewProps.props}
            selectedViewId={element.elementId}
          />
          <BaseSettings />
        </>
      )
    }
    default:
      return null
  }
}

export const SettingPanelQualifier: FC = () => {
  const selectedView = useAppSelector(getSelectedView)
  const selectedViewProps = useAppSelector(getSelectedViewPropsSelector)

  return selectedView && selectedViewProps ? (
    <div className={styles.elementSettings}>
      <Text size="xs" view="secondary" className="p-t-s p-b-xs">
        Base
      </Text>
      <div className="m-b-s">
        <LabelSetting viewId={selectedView.elementId} />
      </div>
      {getSettingsPanel(selectedViewProps, selectedView)}
    </div>
  ) : (
    <NotFound title=" " description="Нет выбранного элемента для настройки" />
  )
}
