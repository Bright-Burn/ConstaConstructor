import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementButton } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: FormElementButton = new FormElementButton(uuid(), {
      action: 'none',
      disabled: false,
      label: 'Кнопка',
      view: 'primary',
      className: '',
      baseProps: {},
    })

    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
