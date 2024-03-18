import type { FC } from 'react'

import type {
  BrandBadgeProps,
  BrandBreadcrumbsProps,
  BrandButtonGroupProps,
  BrandButtonProps,
  BrandCardElementPropsStyles,
  BrandCheckboxProps,
  BrandComboboxProps,
  BrandDataTimeProps,
  BrandDatePickerProps,
  BrandIconProps,
  BrandInformerElementProps,
  BrandLayoutElementPropsStyles,
  BrandOwnChoiceGroupProps,
  BrandPrototypeRectangleProps,
  BrandPrototypeTextProps,
  BrandRadioButtonProps,
  BrandSelectProps,
  BrandSwitchProps,
  BrandTableProps,
  BrandTabsElementProps,
  BrandTagProps,
  BrandTextElementProps,
  BrandTextFieldProps,
  BrandUserProps,
  ISelectedElement,
  UnionProps,
} from '../../../coreTypes'
import { FormElementDictTypes, FormGroupsDictTypes } from '../../../coreTypes'
import type { BrandListProps } from '../../../coreTypes/ListTypes'
import { useAppSelector } from '../../../store'
import { isElementProps } from '../../../utils/quard'

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
import { IconSettings } from './IconSettings'
import { InformerSettings } from './InformerSettings'
import { LayoutSettings } from './LayoutSettings'
import { ListSettings } from './ListSettings'
import { NotFound } from './NotFound'
import { PrototypeSettings } from './PrototypeSettings'
import { RadioButtonSettings } from './RadioButtonSettings'
import { SelectSettings } from './SelectSettings'
import { SwitchSettings } from './SwitchSettings'
import { TableSettings } from './TableSettings'
import { TabsSettings } from './TabsSettings'
import { TagSettings } from './TagSettings'
import { TextFieldSettings } from './TextFieldSettings'
import { TextSettings } from './TextSettings'
import { UserSettings } from './UserSettings'

import styles from './styles.module.css'

const getSettingsPanel = (selectedElementProps: UnionProps, selectedElement: ISelectedElement) => {
  if (selectedElement) {
    switch (selectedElement.elementType) {
      case FormElementDictTypes.Text: {
        if (!isElementProps<BrandTextElementProps>(selectedElementProps, 'Text')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <>
            <TextSettings selectedProps={selectedElementProps.props} selectedElement={element} />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Informer: {
        if (!isElementProps<BrandInformerElementProps>(selectedElementProps, 'Informer')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <InformerSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Badge: {
        if (!isElementProps<BrandBadgeProps>(selectedElementProps, 'Badge')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <BadgeSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Table: {
        if (!isElementProps<BrandTableProps>(selectedElementProps, 'Table')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <TableSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormGroupsDictTypes.Layout: {
        if (!isElementProps<BrandLayoutElementPropsStyles>(selectedElementProps, 'Layout')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <LayoutSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormGroupsDictTypes.Card: {
        if (!isElementProps<BrandCardElementPropsStyles>(selectedElementProps, 'Card')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <CardSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormGroupsDictTypes.ButtonModal: {
        if (!isElementProps<BrandButtonGroupProps>(selectedElementProps, 'ButtonModal')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <ButtonModuleSettings
            selectedElementProps={selectedElementProps.props}
            selectedElement={element}
          />
        )
      }
      case FormElementDictTypes.Tabs: {
        if (!isElementProps<BrandTabsElementProps>(selectedElementProps, 'Tabs')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <TabsSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Checkbox: {
        if (!isElementProps<BrandCheckboxProps>(selectedElementProps, 'Checkbox')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <CheckboxSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.TextField: {
        if (!isElementProps<BrandTextFieldProps>(selectedElementProps, 'TextField')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <TextFieldSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.List: {
        if (!isElementProps<BrandListProps>(selectedElementProps, 'List')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <ListSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.RadioButton: {
        if (!isElementProps<BrandRadioButtonProps>(selectedElementProps, 'RadioButton')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <RadioButtonSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Button: {
        if (!isElementProps<BrandButtonProps>(selectedElementProps, 'Button')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <ButtonSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Switch: {
        if (!isElementProps<BrandSwitchProps>(selectedElementProps, 'Switch')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <SwitchSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.DatePicker: {
        if (!isElementProps<BrandDatePickerProps>(selectedElementProps, 'DatePicker')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <DatePickerSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.ComboBox: {
        if (!isElementProps<BrandComboboxProps>(selectedElementProps, 'ComboBox')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <ComboBoxSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Select: {
        if (!isElementProps<BrandSelectProps>(selectedElementProps, 'SelectForm')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <>
            <SelectSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.DataTime: {
        if (!isElementProps<BrandDataTimeProps>(selectedElementProps, 'DataTime')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <>
            <DataTimeSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.PrototypeTextElement: {
        if (
          !isElementProps<BrandPrototypeTextProps>(selectedElementProps, 'PrototypeTextElement')
        ) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <PrototypeSettings
            selectedElementProps={selectedElementProps.props}
            selectedElement={element}
          />
        )
      }
      case FormElementDictTypes.PrototypeRectangleElement: {
        if (
          !isElementProps<BrandPrototypeRectangleProps>(
            selectedElementProps,
            'PrototypeRectangleElement',
          )
        ) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <PrototypeSettings
            selectedElementProps={selectedElementProps.props}
            selectedElement={element}
          />
        )
      }
      case FormElementDictTypes.BreadcrumbsForm: {
        if (
          !isElementProps<BrandBreadcrumbsProps>(selectedElementProps, 'BreadcrumbsFormElement')
        ) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }
        return (
          <>
            <BreadcrumbsSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.User: {
        if (!isElementProps<BrandUserProps>(selectedElementProps, 'User')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <UserSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Tag: {
        if (!isElementProps<BrandTagProps>(selectedElementProps, 'Tag')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <TagSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.ChoiceGroup: {
        if (!isElementProps<BrandOwnChoiceGroupProps>(selectedElementProps, 'ChoiceGroup')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <>
            <ChoiceGroupSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />{' '}
            <BaseSettings />
          </>
        )
      }
      case FormElementDictTypes.Icon: {
        if (!isElementProps<BrandIconProps>(selectedElementProps, 'Icon')) {
          return
        }
        const element = {
          elementId: selectedElement.elementId,
          elementType: selectedElement.elementType,
        }

        return (
          <IconSettings
            selectedElementProps={selectedElementProps.props}
            selectedElement={element}
          />
        )
      }
      default:
        return null
    }
  }
}

export const SettingPanelQualifier: FC = () => {
  const { selectedElement, selectedElementProps } = useAppSelector(state => state.formConstructor)

  return selectedElement && selectedElementProps ? (
    <div className={`${styles.elementSettings} m-t-s`}>
      {getSettingsPanel(selectedElementProps, selectedElement)}
    </div>
  ) : (
    <NotFound title=" " description="Нет выбранного элемента для настройки" />
  )
}
