import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { ICardElement } from '../../../../../../coreTypes'
import { FormGroupsDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import CardImage from './CardImage'

import styles from '../styles.module.css'

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
          constaProps: {
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
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <CardImage />
    </div>
  )
}
