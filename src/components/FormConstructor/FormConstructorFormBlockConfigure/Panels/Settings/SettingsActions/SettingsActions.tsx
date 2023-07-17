import { Button } from '@consta/uikit/Button'
import { Checkbox } from '@consta/uikit/Checkbox'
import React, { useState } from 'react'
import {
  formConstructorSlice,
  useAppDispatch,
  useAppSelector,
} from '../../../../store/formElements'
import styles from './styles.module.css'
import { Modal } from '@consta/uikit/Modal'
import { HotKeyPaneNote } from './HotKeyPaneNote'

export const SettingsActions = () => {
  const { isGridVisible } = useAppSelector(state => state.formConstructor)
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onClickShowGrid = () => {
    dispatch(
      formConstructorSlice.actions.showGrid({
        isGridVisible: !isGridVisible,
      }),
    )
  }

  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }

  return (
    <div className={styles.buttonSettings}>
      <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
      <Button label={'Справка'} onClick={onNotesOpen} size={'xs'} view={'secondary'} />
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote />
      </Modal>
    </div>
  )
}

