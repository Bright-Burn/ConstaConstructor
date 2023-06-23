import { FC, useEffect, useState } from 'react'
import { IButtonActionViewer } from './types'
import { Modal } from '@consta/uikit/Modal'
import { ButtonGroupProps, ILayoutElement, useAppSelector } from '../../../../store/formElements'
import { Button } from '@consta/uikit/Button'
import styles from './styles.module.css'
import { IconClose } from '@consta/icons/IconClose'
import { LayoutFormElement } from '../../LayoutFormElement'

export const ButtonActionViewer: FC<IButtonActionViewer> = ({
  buttonGroup,
  openViewer,
  onCloseViewer,
}) => {
  const { allElementsTree, allElementsMap } = useAppSelector(state => state.formConstructor)

  const [layoutFormElement, setLayoutFromElement] = useState<ILayoutElement>()
  const [buttonGroupProps, setButtonGroupProps] = useState<ButtonGroupProps>()

  useEffect(() => {
    setButtonGroupProps(buttonGroup.props)
  }, [buttonGroup])

  useEffect(() => {
    const childrenElements = allElementsTree.get(buttonGroup.id) || []
    if (childrenElements.length) {
      const element = allElementsMap.get(childrenElements[0])
      if (element && element.type === 'Layout') {
        setLayoutFromElement(element as ILayoutElement)
      }
    }
  }, [openViewer, allElementsTree, allElementsMap, buttonGroup])

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
          {layoutFormElement ? <LayoutFormElement element={layoutFormElement} /> : <></>}
        </div>
      </div>
    </Modal>
  )
}

