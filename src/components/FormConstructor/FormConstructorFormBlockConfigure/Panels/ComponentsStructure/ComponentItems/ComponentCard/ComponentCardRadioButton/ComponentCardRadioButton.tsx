import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementRadioButton } from '../../../../../../store/formElements/radioButtonTypes'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardRadioButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newRadioButton: IFormElementRadioButton = {
      id: uuid(),
      type: FormElementTypes.RadioButton,
      props: {
        checked: false,
        size: 'm',
        view: 'primary',
        align: 'center',
        label: 'Это радиокнопка',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newRadioButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
