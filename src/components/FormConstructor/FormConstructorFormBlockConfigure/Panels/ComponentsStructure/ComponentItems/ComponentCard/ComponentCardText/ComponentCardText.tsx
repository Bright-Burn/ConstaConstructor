import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementText } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import styles from '../styles.module.css'
import TextImage from './TextImage'

export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newText: IFormElementText = {
      id: uuid(),
      type: FormElementDictTypes.Text,
      props: {
        props: {
          content: 'Text',
          size: 's',
          className: '',
          baseProps: {},
          transformText: {},
        },
        type: 'Text',
      },
    }
    dispatch(setDraggableElement({ element: newText }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TextImage />
    </div>
  )
}
