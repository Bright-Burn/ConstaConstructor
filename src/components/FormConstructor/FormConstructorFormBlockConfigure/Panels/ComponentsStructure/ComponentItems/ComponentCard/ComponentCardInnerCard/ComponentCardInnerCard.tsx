import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { FormGroupsDictTypes, ICardElement } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'

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
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
