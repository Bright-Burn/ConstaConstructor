import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementRadioButton } from '../../../../../../store/formElements/radioButtonTypes'

export const ComponentCardRadioButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newRadioButton: IFormElementRadioButton = {
      id: uuid(),
      type: FormElementTypes.RadioButton,
      props: {
        size: 'm',
        view: 'primary',
        align: 'center',
        label: 'Это радиокнопка',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newRadioButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
