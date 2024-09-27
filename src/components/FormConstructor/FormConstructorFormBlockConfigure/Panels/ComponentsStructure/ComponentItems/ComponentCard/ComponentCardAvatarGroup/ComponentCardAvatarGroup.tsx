import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementAvatarGroup } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

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

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
