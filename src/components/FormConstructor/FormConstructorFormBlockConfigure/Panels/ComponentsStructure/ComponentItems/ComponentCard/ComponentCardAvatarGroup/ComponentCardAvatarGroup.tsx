import type { FC } from 'react'
import uuid from 'react-uuid'

import type { AvatarProps, IFormElementAvatarGroup } from '../../../../../../coreTypes'
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
          constaProps: {
            items: defaultAvatarProps,
          },
          styles: {},
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

const defaultAvatarProps: AvatarProps['constaProps'][] = [
  {
    name: 'Геннадий Морозов',
  },
  {
    name: 'Аркадий Лушко',
  },
  {
    name: 'Аркадий Лушко',
  },
  {
    name: 'Георгий Калинин',
  },
  {
    name: 'Виталий Алтуфьев',
  },
]
