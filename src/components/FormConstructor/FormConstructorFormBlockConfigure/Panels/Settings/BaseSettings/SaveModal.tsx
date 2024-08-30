import React, { useState } from 'react'
import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import {
  getSelectedView,
  saveBaseComponent,
  useAppDispatch,
  useAppSelector,
} from '../../../../store'

import style from './styles.module.css'
interface ISaveModal {
  onCloseModal: () => void
  isModalOpen: boolean
}
export const SaveModal: React.FC<ISaveModal> = ({ onCloseModal, isModalOpen }) => {
  const [moduleName, setModuleName] = useState<string | null>(null)
  const selectedView = useAppSelector(getSelectedView)
  const dispatch = useAppDispatch()
  const changeTextFieldValue = (value: string | null) => {
    setModuleName(value)
  }
  const onSaveModule = () => {
    if (selectedView && moduleName) {
      dispatch(saveBaseComponent(selectedView.elementId, moduleName))
    }
  }

  return (
    <Modal isOpen={isModalOpen} className={style.saveModal} onClickOutside={onCloseModal}>
      <div className={style.saveModalContainer}>
        <Text>Export as component</Text>
        <TextField
          size="xs"
          form="default"
          withClearButton={true}
          value={moduleName}
          placeholder="Component name"
          onChange={changeTextFieldValue}
        />
        <Button
          size="xs"
          label="Export"
          width="default"
          className={style.saveModalButton}
          onClick={onSaveModule}
        />
      </div>
    </Modal>
  )
}
