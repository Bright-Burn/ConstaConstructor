import React, { FC, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import { FormElementTypes, FormGroupsTypes } from '../../../store/formElements/types'
import { LayoutSettings } from './LayoutSettings'
import { Checkbox } from '@consta/uikit/Checkbox'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { SaveModalCard } from './SaveModalCard'
import { BaseSettings } from './BaseSettings/BaseSettings'
import { CardSettings } from './CardSettings'  
import { FileField } from '@consta/uikit/FileField'
import { readFile } from '../../../utils'
import { BadgeSettings } from './BadgeSettings'

export const Settings: FC = () => {
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false)

  const { selectedElement, isGridVisible } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const getSettingsPanel = () => {
    if (selectedElement) {
      switch (selectedElement.elementType) {
        case FormElementTypes.Badge:
          return (
            <>
              <BadgeSettings /> <BaseSettings />
            </>
          )
        case FormGroupsTypes.LayoutInner || FormGroupsTypes.LayoutOuter:
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

  return (
    <div className={`borderCard ${styles.settingsBlock} ${styles.settingsContainer}`}>
      <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
      <div className={styles.buttonsSaveLoad}>
        <FileField id={'loader'} onChange={onChange}>
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
        onSaveProject={onSaveProject}
        showSaveModal={showSaveModal}
      />
      <div className={`${styles.elementSettings} m-t-s`}>{getSettingsPanel()}</div>
    </div>
  )
}
