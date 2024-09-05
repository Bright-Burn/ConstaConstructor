import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementAvatarGroup } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import styles from '../styles.module.css'

export const ComponentCardAvatarGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newAvatarGroup: IFormElementAvatarGroup = {
      id: uuid(),
      type: FormElementDictTypes.AvatarGroup,
      order: 1,
      props: {
        props: {
          items: [
            {
              name: 'Геннадий Морозов',
              url: '',
              className: '',
              baseProps: {},
            },
            {
              name: 'Аркадий Лушко',
              url: '',
              className: '',
              baseProps: {},
            },
            {
              name: 'Аркадий Лушко',
              url: '',
              className: '',
              baseProps: {},
            },
            {
              name: 'Георгий Калинин',
              url: '',
              className: '',
              baseProps: {},
            },
            {
              name: 'Виталий Алтуфьев',
              url: '',
              className: '',
              baseProps: {},
            },
          ],
          className: '',
          baseProps: {},
        },
        type: 'AvatarGroup',
      },
    }

    dispatch(setDraggableElement({ element: newAvatarGroup }))
  }

  return (
    <div draggable={true} className={styles.cardHeight} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
    </div>
  )
}
