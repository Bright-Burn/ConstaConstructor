import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { FormGroupsDictTypes, ICardElement } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import styles from '../styles.module.css'
import CardImage from './CardImage'

export const ComponentCardInnerCard: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCard: ICardElement = {
      id: uuid(),
      type: FormGroupsDictTypes.Card,
      isOuter: false,
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
      <Text className={styles.paddingText}>{name}</Text>
      <CardImage />
    </div>
  )
}
