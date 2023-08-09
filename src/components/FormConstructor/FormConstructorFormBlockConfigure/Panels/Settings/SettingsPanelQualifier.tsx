import { FC } from 'react'
import { useAppSelector } from '../../../store'
import { isElementProps } from '../../../utils/quard'
import { BrandTextElementProps, FormElementDictTypes } from '../../../coreTypes'
import { LayoutSettings } from './LayoutSettings'
import { BaseSettings } from './BaseSettings'
import { CardSettings } from './CardSettings'
import { BadgeSettings } from './BadgeSettings'
import { TableSettings } from './TableSettings'
import { TabsSettings } from './TabsSettings'
import { InformerSettings } from './InformerSettings'
import { CheckboxSettings } from './CheckboxSettings'
import { TextSettings } from './TextSettings'
import { TextFieldSettings } from './TextFieldSettings'
import { ListSettings } from './ListSettings'
import { RadioButtonSettings } from './RadioButtonSettings'
import { SwitchSettings } from './SwitchSettings'
import { DatePickerSettings } from './DatePickerSettings'
import { ComboBoxSettings } from './ComboBoxSettings'
import { SelectSettings } from './SelectSettings'
import { DataTimeSettings } from './DataTimeSettings'
import { BreadcrumbsSettings } from './BreadcrumbsSettings'
import { PrototypeSettings } from './PrototypeSettings'
import { UserSettings } from './UserSettings'
import { IconSettings } from './IconSettings'
import { ButtonSettings } from './ButtonSettings/ButtonSettings'
import { ButtonModuleSettings } from './ButtonModalSettings'
import { FilledSettings } from './FilledSettings/FilledSettings'
import { TagSettings } from './TagSettings'
import { ChoiceGroupSettings } from './ChoiceGroupSettings'

import styles from './styles.module.css'
import { FormGroupsDictTypes, ISelectedElement, UnionProps } from '../../../coreTypes/types'
import { BrandInformerElementProps } from '../../../coreTypes/informerTypes'
import { BrandBadgeProps } from '../../../coreTypes/badgeTypes'
import { BrandTableProps } from '../../../coreTypes/tableTypes'
import {
  BrandIconProps,
  BrandOwnChoiceGroupProps,
  BrandTagProps,
  BrandUserProps,
  BrandBreadcrumbsProps,
  BrandPrototypeTextProps,
  BrandPrototypeRectProps,
  BrandDatePickerProps,
  BrandDataTimeProps,
  BrandSelectProps,
} from '../../../coreTypes'
import { BrandLayoutElementPropsStyles } from '../../../coreTypes/layoutTypes'
import { BrandCardElementPropsStyles } from '../../../coreTypes/cardTypes'
import { BrandButtonGroupProps, BrandButtonProps } from '../../../coreTypes/buttonTypes'
import { BrandTabsElementProps } from '../../../coreTypes/tabsTypes'
import { BrandCheckboxProps } from '../../../coreTypes/checkboxTypes'
import { BrandTextFieldProps } from '../../../coreTypes/textFieldTypes'
import { BrandListProps } from '../../../coreTypes/ListTypes'
import { BrandRadioButtonProps } from '../../../coreTypes/radioButtonTypes'
import { BrandSwitchProps } from '../../../coreTypes/SwitchTypes'
import { BrandComboboxProps } from '../../../coreTypes/comboBoxTypes'

const getSettingsPanel = (
  selectedElementProps: UnionProps | null,
  selectedElement: ISelectedElement | null,
) => {
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
          <>
            <ButtonModuleSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />
          </>
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
      case FormElementDictTypes.PrototypeRectElement: {
        if (
          !isElementProps<BrandPrototypeRectProps>(selectedElementProps, 'PrototypeRectElement')
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
          <>
            <IconSettings
              selectedElementProps={selectedElementProps.props}
              selectedElement={element}
            />
            <BaseSettings />
          </>
        )
      }
      default:
        return <></>
    }
  }
}

export const SettingPanelQualifier: FC = () => {
  const { selectedElement, selectedElementProps } = useAppSelector(state => state.formConstructor)

  return (
    <div className={`${styles.elementSettings} m-t-s`}>
      {getSettingsPanel(selectedElementProps, selectedElement)}
    </div>
  )
}
