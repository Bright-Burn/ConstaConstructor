import { Button } from '@consta/uikit/Button'
import { Checkbox } from '@consta/uikit/Checkbox'
import { useState } from 'react'
import { useAppDispatch, useAppSelector, checkIsGridVisible, toggleGrid } from '../../../../store'
import styles from './styles.module.css'
import { Modal } from '@consta/uikit/Modal'
import { HotKeyPaneNote } from './HotKeyPaneNote'

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
      <Checkbox checked={isGridVisible} label={'Показать сетку'} onClick={onClickShowGrid} />
      <Button label={'Справка'} onClick={onNotesOpen} size={'xs'} view={'secondary'} />
      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote />
      </Modal>
    </div>
  )
}
