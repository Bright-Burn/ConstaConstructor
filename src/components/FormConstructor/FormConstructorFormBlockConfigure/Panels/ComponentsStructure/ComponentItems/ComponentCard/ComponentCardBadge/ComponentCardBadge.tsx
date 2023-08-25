import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementBadge } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementDictTypes.Badge,
      props: {
        props: {
          label: 'Badge',
          form: 'default',
          size: 's',
          status: 'success',
          view: 'filled',
          className: '',
          baseProps: {},
        },
        type: 'Badge',
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
