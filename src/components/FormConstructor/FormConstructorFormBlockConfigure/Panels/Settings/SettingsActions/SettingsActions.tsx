import { useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { Checkbox } from '@consta/uikit/Checkbox'
import { Modal } from '@consta/uikit/Modal'

import { checkIsGridVisible, toggleGrid, useAppDispatch, useAppSelector } from '../../../../store'

import { HotKeyPaneNote } from './HotKeyPaneNote'

import styles from './styles.module.css'

export const SettingsActions = () => {
  const isGridVisible = useAppSelector(checkIsGridVisible)
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onClickShowGrid = () => {
    dispatch(toggleGrid())
  }

  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }

  return (
    <div className={styles.buttonSettings}>
      <Checkbox checked={isGridVisible} label="Показать сетку" onClick={onClickShowGrid} />
      <Button label="Справка" size="xs" view="secondary" onClick={onNotesOpen} />
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote />
      </Modal>
    </div>
  )
}
