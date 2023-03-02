import React, { FC, useState } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../../store/formElements'
import { FormGroupsTypes } from '../../../store/formElements/types'
import { LayoutSettings } from './LayoutSettings'
import { Checkbox } from '@consta/uikit/Checkbox'
import styles from './styles.module.css'
import { Button } from '@consta/uikit/Button'
import { SaveModalCard } from './SaveModalCard'
import { BaseSettings } from './BaseSettings/BaseSettings'
import { defaultTestName } from '../../../projectSaveLoad'
import { CardSettings } from './CardSettings'

export const Settings: FC = () => {
  const [showSaveModal, setShowSaveModal] = useState<boolean>(false)

  const { selectedElement, isGridVisible } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const getSettingsPanel = () => {
    if (selectedElement) {
      switch (selectedElement.elementType) {
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

  const onLoadProjectClick = () => {
    dispatch(
      formConstructorSlice.actions.loadProjectFromStorage({
        name: defaultTestName,
      }),
    )
  }

  const onSaveProjectClick = () => {
    setShowSaveModal(true)
  }

  const onSaveProject = (name: string, description: string) => {
    dispatch(formConstructorSlice.actions.saveProjectToMemmoryStorage({ name, description }))
    onClose()
  }

  const onClose = () => {
    setShowSaveModal(false)
  }

  return (
    <div className={`borderCard ${styles.settingsBlock} ${styles.settingsContainer}`}>
      <>
        <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
        <Button
          label={'Загрузить проект'}
          onClick={onLoadProjectClick}
          size={'xs'}
          view={'secondary'}
        />
        <Button
          label={'Сохранить проект'}
          onClick={onSaveProjectClick}
          size={'xs'}
          view={'secondary'}
        />
        <SaveModalCard
          onCloseModalCard={onClose}
          onSaveProject={onSaveProject}
          showSaveModal={showSaveModal}
        />
        {getSettingsPanel()}
      </>
    </div>
  )
}
