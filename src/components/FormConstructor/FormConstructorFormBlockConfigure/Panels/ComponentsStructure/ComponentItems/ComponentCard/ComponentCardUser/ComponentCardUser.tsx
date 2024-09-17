import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementUser } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardUser: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newUser: IFormElementUser = {
      id: uuid(),
      type: FormElementDictTypes.User,
      order: 1,
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

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
