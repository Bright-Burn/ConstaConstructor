import React, { FC, useState } from 'react'
import { saveModuleToFile, useAppDispatch, useAppSelector } from '../../../store'
import { FormElementTypes, FormGroupsTypes } from '../../../coreTypes'
import { LayoutSettings } from './LayoutSettings'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { BaseSettings } from './BaseSettings'
import { CardSettings } from './CardSettings'
import { BadgeSettings } from './BadgeSettings'
import { TableSettings } from './TableSettings'
import { TabsSettings } from './TabsSettings'
import { InformerSettings } from './InformerSettings'
import { CheckboxSettings } from './CheckboxSettings'
import { TextSettings } from './TextSettings'
import { TextFieldSettings } from './TextFieldSettings'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
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
import { NotFound } from './NotFound'
import { getSettingsPanelState, toggleSettingsPanelState } from '../../../store'
import { TextField } from '@consta/uikit/TextField'
import { IconUpload } from '@consta/icons/IconUpload'

// import { projectFromSerilizable } from '../../../projectSaveLoad'

export const Settings: FC = () => {
  const [value, setValue] = useState<string | null>(null)
  const handleChange = ({ value }: { value: string | null }) => setValue(value)

  const settingsPanelState = useAppSelector(getSettingsPanelState)

  const { selectedElement, pages } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const getSettingsPanel = () => {
    if (selectedElement) {
      switch (selectedElement.elementType) {
        case FormElementTypes.Text:
          return (
            <>
              <TextSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Informer:
          return (
            <>
              <InformerSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Badge:
          return (
            <>
              <BadgeSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Table:
          return (
            <>
              <TableSettings /> <BaseSettings />
            </>
          )
        case FormGroupsTypes.Layout:
          return (
            <>
              <LayoutSettings /> <BaseSettings />
            </>
          )
        case FormGroupsTypes.Card:
          return (
            <>
              <CardSettings /> <BaseSettings />
            </>
          )
        case FormGroupsTypes.ButtonModal:
          return (
            <>
              <ButtonModuleSettings />
            </>
          )
        case FormElementTypes.Tabs:
          return (
            <>
              <TabsSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Checkbox:
          return (
            <>
              <CheckboxSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.TextField:
          return (
            <>
              <FilledSettings />
              <TextFieldSettings />
              <BaseSettings />
            </>
          )
        case FormElementTypes.List:
          return (
            <>
              <ListSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.RadioButton:
          return (
            <>
              <RadioButtonSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Button:
          return (
            <>
              <FilledSettings />
              <ButtonSettings />
              <BaseSettings />
            </>
          )
        case FormElementTypes.Switch:
          return (
            <>
              <SwitchSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.DatePicker:
          return (
            <>
              <DatePickerSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.ComboBox:
          return (
            <>
              <ComboBoxSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Select:
          return (
            <>
              <SelectSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.DataTime:
          return (
            <>
              <DataTimeSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.PrototypeTextElement:
          return <PrototypeSettings />
        case FormElementTypes.PrototypeRectElement:
          return <PrototypeSettings />
        case FormElementTypes.BreadcrumbsForm:
          return (
            <>
              <BreadcrumbsSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.User:
          return (
            <>
              <UserSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Tag:
          return (
            <>
              <TagSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.ChoiceGroup:
          return (
            <>
              <ChoiceGroupSettings /> <BaseSettings />
            </>
          )
        case FormElementTypes.Icon:
          return <IconSettings />
        default:
          return <></>
      }
    } else {
      return <NotFound></NotFound>
    }
  }

  const onSaveProject = () => {
    if (selectedElement && value) {
      dispatch(saveModuleToFile(selectedElement.elementId, value))
    }
  }

  const toggleSettingsPanel = () => {
    dispatch(toggleSettingsPanelState())
  }

  return (
    <>
      {settingsPanelState ? (
        <div className={`borderCard ${styles.settingsBlock} ${styles.settingsContainer} `}>
          <div className={`${styles.elementSettings} m-t-s`}>{getSettingsPanel()}</div>
          <div className={styles.exportText}>
            <TextField
              value={value}
              onChange={handleChange}
              type='text'
              label='Экспортировать компонент'
              placeholder='Введите название компонента'
            />
            <Button
              className={styles.exportButton}
              view='clear'
              iconLeft={IconUpload}
              onClick={onSaveProject}
            />
          </div>
        </div>
      ) : (
        <div className={styles.toggleButton}>
          <Button onlyIcon iconLeft={IconArrowLeft} onClick={toggleSettingsPanel} size='s' />
        </div>
      )}
    </>
  )
}
