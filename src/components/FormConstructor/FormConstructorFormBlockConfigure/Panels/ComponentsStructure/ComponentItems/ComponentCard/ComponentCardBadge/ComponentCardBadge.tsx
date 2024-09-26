import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementBadge } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementDictTypes.Badge,
      order: 1,
      props: {
        props: {
          constaProps: {
            label: 'Badge',
            form: 'default',
            size: 's',
            status: 'success',
            view: 'filled',
          },
          baseProps: {},
          className: '',
          styles: {},
        },
        type: 'Badge',
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
