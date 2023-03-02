import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'
import { TextField } from '@consta/uikit/TextField'
import React, { FC } from 'react'
import { defaultDescription, defaultTestName } from '../../../../projectSaveLoad'
import styles from './styles.module.css'
import { ISaveModalCard } from './types'

export const SaveModalCard: FC<ISaveModalCard> = ({
  showSaveModal,
  onCloseModalCard,
  onSaveProject,
}) => {
  const onSaveClick = () => {
    onSaveProject(defaultTestName, 'Description')
  }

  return (
    <Modal isOpen={showSaveModal} onClickOutside={onCloseModalCard}>
      <div className={styles.saveCard}>
        <TextField className={styles.saveCardRow} value={defaultTestName} disabled={true} />
        <TextField className={styles.saveCardRow} value={defaultDescription} disabled={true} />
        <div className={styles.saveCardButtons}>
          <Button label={'Закрыть'} size={'s'} view={'ghost'} onClick={onCloseModalCard} />
          <Button label={'Сохранить'} size={'s'} view={'secondary'} onClick={onSaveClick} />
        </div>
      </div>
    </Modal>
  )
}
