import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementBadge } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import BadgeImage from './BadgeImage'

import styles from '../styles.module.css'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementDictTypes.Badge,
      props: {
        props: {
          label: 'Badge',
          form: 'default',
          size: 's',
          status: 'success',
          view: 'filled',
          className: '',
          baseProps: {},
        },
        type: 'Badge',
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <BadgeImage />
    </div>
  )
}
