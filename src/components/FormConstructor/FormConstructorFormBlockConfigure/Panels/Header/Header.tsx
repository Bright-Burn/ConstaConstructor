import { useState } from 'react'
import { IconQuestion } from '@consta/icons/IconQuestion'
import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'

import { MainIcon } from '../../../../../Icons'
import { checkViewMode, useAppSelector } from '../../../store'

import { RightSide } from './RightSide/RightSide'
import { HotKeyPaneNote } from './Help'
import { Pages } from './Pages'

import style from './Header.module.css'

export const Header: React.FC = () => {
  const [showNotes, setShowNotes] = useState<boolean>(false)
  const onNotesOpen = () => {
    setShowNotes(true)
  }

  const onNotesClose = () => {
    setShowNotes(false)
  }
  const isViewMode = useAppSelector(checkViewMode)
  if (isViewMode) {
    return null
  }

  return (
    <div className={`${style.headerContainer} container-row`}>
      <div className="container-row align-center ">
        <MainIcon />
        <div className={style.divider} />
        <Button
          view="clear"
          iconRight={IconQuestion}
          size="xs"
          onlyIcon={true}
          onClick={onNotesOpen}
        />
        <Pages />
      </div>
      <RightSide />

      <Modal isOpen={showNotes} onClickOutside={onNotesClose} onEsc={onNotesClose}>
        <HotKeyPaneNote onClose={onNotesClose} />
      </Modal>
    </div>
  )
}
