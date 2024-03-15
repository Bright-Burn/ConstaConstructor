import type { FC } from 'react'
import React, { useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'
import { TextField } from '@consta/uikit/TextField'

import type { ISaveModalCard } from './types'

import styles from './styles.module.css'

export const SaveModalCard: FC<ISaveModalCard> = ({ showSaveModal, onCloseModalCard, onSave }) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const onSaveClick = () => {
    onSave(name, description)
    onCloseModalCard()
  }

  const handleChangeName = ({ value }: { value: string | null }) => {
    setName(value || '')
  }
  const handleChangeDescription = ({ value }: { value: string | null }) => {
    setDescription(value || '')
  }

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
          <Button label="Закрыть" size="s" view="ghost" onClick={onCloseModalCard} />
          <Button label="Сохранить" size="s" view="secondary" onClick={onSaveClick} />
        </div>
      </div>
    </Modal>
  )
}
