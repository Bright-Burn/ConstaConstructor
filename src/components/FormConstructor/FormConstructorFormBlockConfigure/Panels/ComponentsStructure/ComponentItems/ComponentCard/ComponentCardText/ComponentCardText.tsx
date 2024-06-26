import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementText } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import TextImage from './TextImage'

import styles from '../styles.module.css'

export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newText: IFormElementText = {
      id: uuid(),
      type: FormElementDictTypes.Text,
      order: 1,
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
