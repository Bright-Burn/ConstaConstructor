import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementUser } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import UserImage from './UserImage'

import styles from '../styles.module.css'

export const ComponentCardUser: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newUser: IFormElementUser = {
      id: uuid(),
      type: FormElementDictTypes.User,
      props: {
        props: {
          view: 'clear',
          width: 'default',
          size: 'm',
          status: undefined,
          name: 'Имя Фамилия',
          info: 'Сегодня на Почтамтской',
          className: '',
          baseProps: {},
        },
        type: 'User',
      },
    }
    dispatch(setDraggableElement({ element: newUser }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <UserImage />
    </div>
  )
}
