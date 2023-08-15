import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch, setDraggableElement } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementIcon, FormElementDictTypes } from '../../../../../../coreTypes'
import { IconImage } from './IconImage'
import styles from '../styles.module.css'

export const ComponentCardIcon: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newIcon: IFormElementIcon = {
      id: uuid(),
      type: FormElementDictTypes.Icon,
      props: {
        props: {
          view: 'primary',
          size: 'm',
          className: '',
          icons: 'IconAlert',
          baseProps: {},
        },
        type: 'Icon',
      },
    }
    dispatch(setDraggableElement({ element: newIcon }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <IconImage />
    </div>
  )
}
