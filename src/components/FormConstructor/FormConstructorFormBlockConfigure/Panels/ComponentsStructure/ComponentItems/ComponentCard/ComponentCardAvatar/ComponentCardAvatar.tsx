import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementAvatar } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

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
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
    </div>
  )
}
