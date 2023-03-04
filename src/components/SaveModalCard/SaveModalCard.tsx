import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'
import { TextField } from '@consta/uikit/TextField'
import React, { FC, useState } from 'react'
import styles from './styles.module.css'
import { ISaveModalCard } from './types'

export const SaveModalCard: FC<ISaveModalCard> = ({ showSaveModal, onCloseModalCard, onSave }) => {
  const [name, setName] = useState<string>('New project')
  const [description, setDescription] = useState<string>('My new project')

  const onSaveClick = () => {
    onSave(name, description)
  }

  const handleChangeName = ({ value }: { value: string | null }) => setName(value || '')
  const handleChangeDescription = ({ value }: { value: string | null }) =>
    setDescription(value || '')

  return (
    <Modal isOpen={showSaveModal} onClickOutside={onCloseModalCard}>
      <div className={styles.saveCard}>
        <TextField className={styles.saveCardRow} value={name} onChange={handleChangeName} />
        <TextField
          className={styles.saveCardRow}
          value={description}
          onChange={handleChangeDescription}
        />
        <div className={styles.saveCardButtons}>
          <Button label={'Закрыть'} size={'s'} view={'ghost'} onClick={onCloseModalCard} />
          <Button label={'Сохранить'} size={'s'} view={'secondary'} onClick={onSaveClick} />
        </div>
      </div>
    </Modal>
  )
}
