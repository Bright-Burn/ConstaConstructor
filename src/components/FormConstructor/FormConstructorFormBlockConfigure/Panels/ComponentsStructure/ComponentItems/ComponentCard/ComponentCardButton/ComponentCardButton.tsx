import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementButton } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: IFormElementButton = {
      id: uuid(),
      type: FormElementDictTypes.Button,
      props: {
        props: {
          size: 'm',
          action: 'none',
          disabled: false,
          label: 'Кнопка',
          view: 'primary',
          form: 'default',
          width: 'default',
          className: '',
          baseProps: {},
        },
        type: 'Button'
      },
    }
    dispatch(setDraggableElement({ element: newButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
