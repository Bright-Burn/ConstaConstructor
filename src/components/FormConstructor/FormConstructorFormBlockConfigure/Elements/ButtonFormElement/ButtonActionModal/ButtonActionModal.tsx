import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { IconClose } from '@consta/icons/IconClose'
import { Button } from '@consta/uikit/Button'
import { Modal } from '@consta/uikit/Modal'

import type { ButtonGroupProps } from '../../../../coreTypes'
import { DroppableLayer } from '../../../DroppableLayer'

import type { IButtonActionViewer } from './types'

import styles from './styles.module.css'

export const ButtonActionModal: FC<IButtonActionViewer> = ({
  buttonGroup,
  openViewer,
  onCloseViewer,
}) => {
  const [buttonGroupProps, setButtonGroupProps] = useState<ButtonGroupProps>()

  useEffect(() => {
    setButtonGroupProps(buttonGroup.props.props)
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
        <Button size="s" onlyIcon={true} iconRight={IconClose} onClick={onCloseViewer} />
      </div>
      <div className={styles.modalContent}>
        <div className={styles.configPane}>
          {buttonGroup ? <DroppableLayer parentElementId={buttonGroup.id} /> : <></>}
        </div>
      </div>
    </Modal>
  )
}
