import React, { FC, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import { FormElementTypes, FormGroupsTypes } from '../../../store/formElements/types'
import { LayoutSettings } from './LayoutSettings'
import { Checkbox } from '@consta/uikit/Checkbox'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { BaseSettings } from './BaseSettings/BaseSettings'
import { CardSettings } from './CardSettings'
import { FileField } from '@consta/uikit/FileField'
import { readFile } from '../../../utils'
import { BadgeSettings } from './BadgeSettings'
import { TabsSettings } from './TabsSettings/TabsSettings'
import { InformerSettings } from './InformerSettings'
import { CheckboxSettings } from './CheckboxSettings'
import { TextSettings } from './TextSettings'
import { TextFieldSettings } from './TextFieldSettings'
import { SaveModalCard } from '../../../SaveModalCard'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
import { SelectSettings } from './SelectSettings/SelectSettings'
import { DataTimeSettings } from './DataTimeSettings'

export const Settings: FC = () => {
  const settingsPanelState = useAppSelector(state => state.formConstructor.settingsPanelState)
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false)

  const { selectedElement, isGridVisible } = useAppSelector(state => state.formConstructor)
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
              <TextFieldSettings /> <BaseSettings />
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
        default:
          return (
            <>
              <BaseSettings />
            </>
          )
      }
    }
  }

  const onClickShowGrid = () => {
    dispatch(
      formConstructorSlice.actions.showGrid({
        isGridVisible: !isGridVisible,
      }),
    )
  }

  const onSaveProjectClick = () => {
    setShowSaveModal(true)
  }

  const onSaveProject = (name: string, description: string) => {
    dispatch(formConstructorSlice.actions.saveProjectToFile({ name, description }))
    onClose()
  }

  const onClose = () => {
    setShowSaveModal(false)
  }

  const onChange = (e: DragEvent | React.ChangeEvent) => {
    const targer = e?.target as HTMLInputElement
    const files = targer?.files ? targer?.files : undefined
    if (files) {
      const file = files[0]
      readFile(file).then(json => {
        dispatch(formConstructorSlice.actions.loadProjectFromJson({ projectJson: json as string }))
      })
    }
  }

  const toggleSettingsPanel = () => {
    dispatch(
      formConstructorSlice.actions.toggleSettingsPanelState({
        settingsPanelState: settingsPanelState,
      }),
    )
  }

  return (
    <>
      {settingsPanelState ? (
        <div className={`borderCard ${styles.settingsBlock} ${styles.settingsContainer} `}>
          <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
          <div className={styles.buttonsSaveLoad}>
            <FileField id={'loader_project'} onChange={onChange}>
              {props => (
                <Button
                  id={'btn'}
                  {...props}
                  className='m-t-s'
                  label={'Загрузить проект'}
                  size={'s'}
                  view={'secondary'}
                />
              )}
            </FileField>
            <Button
              className='m-t-s'
              label={'Сохранить проект'}
              onClick={onSaveProjectClick}
              size={'s'}
              view={'secondary'}
            />
          </div>
          <SaveModalCard
            onCloseModalCard={onClose}
            onSave={onSaveProject}
            showSaveModal={showSaveModal}
          />
          <div className={`${styles.elementSettings} m-t-s`}>{getSettingsPanel()}</div>
        </div>
      ) : (
        <div className={styles.toggleButton}>
          <Button onlyIcon iconLeft={IconArrowLeft} onClick={toggleSettingsPanel} size='s' />
        </div>
      )}
    </>
  )
}
