import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementAvatar } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import styles from '../styles.module.css'

export const ComponentCardAvatar: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newAvatar: IFormElementAvatar = {
      id: uuid(),
      type: FormElementDictTypes.Avatar,
      order: 1,
      props: {
        props: {
          className: '',
          baseProps: {},
        },
        type: 'Avatar',
      },
    }

    dispatch(setDraggableElement({ element: newAvatar }))
  }

  return (
    <div draggable={true} className={styles.cardHeight} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText} view="primary">
        {name}
      </Text>
    </div>
  )
}
