import type { FC } from 'react'
import uuid from 'react-uuid'

import type { ICardElement } from '../../../../../../coreTypes'
import { FormGroupsDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newCard: ICardElement = {
      id: uuid(),
      type: FormGroupsDictTypes.Card,
      isOuter: false,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            verticalSpace: 'm',
            horizontalSpace: 'm',
            status: undefined,
            form: 'square',
          },
          baseProps: {},
          className: '',
          styles: {
            width: '376px',
            height: '227px',
          },
        },
        type: 'Card',
      },
    }
    dispatch(setDraggableElement({ element: newCard }))
  }

  return (
    <CardLabel
      label={name}
      isGroupIcon={true}
      onStartDragComponentCard={onStartDragComponentCard}
    />
  )
}
