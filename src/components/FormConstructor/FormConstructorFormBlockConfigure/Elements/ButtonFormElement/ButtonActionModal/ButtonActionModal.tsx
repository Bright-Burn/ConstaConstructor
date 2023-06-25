import { FC, useEffect, useState } from 'react'
import { IButtonActionViewer } from './types'
import { Modal } from '@consta/uikit/Modal'
import { ButtonGroupProps } from '../../../../store/formElements'
import { Button } from '@consta/uikit/Button'
import styles from './styles.module.css'
import { IconClose } from '@consta/icons/IconClose'
import { DroppableLayer } from '../../../DroppableLayer'

export const ButtonActionModal: FC<IButtonActionViewer> = ({
  buttonGroup,
  openViewer,
  onCloseViewer,
}) => {
  const [buttonGroupProps, setButtonGroupProps] = useState<ButtonGroupProps>()

  useEffect(() => {
    setButtonGroupProps(buttonGroup.props)
  }, [buttonGroup])

  const onModalClick = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Modal
      style={{ ...buttonGroupProps, display: 'flex', flexDirection: 'column' }}
      isOpen={openViewer}
      hasOverlay={false}
      onClick={onModalClick}
      onDrop={onDrop}>
      <div className={styles.modalClose}>
        <Button size='s' onlyIcon={true} iconRight={IconClose} onClick={onCloseViewer} />
      </div>
      <div className={styles.modalContent}>
        <div className={styles.configPane}>
          {buttonGroup ? <DroppableLayer parentElementId={buttonGroup.id} /> : <></>}
        </div>
      </div>
    </Modal>
  )
}

