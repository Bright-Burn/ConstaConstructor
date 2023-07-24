import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementRadioButton, FormElementTypes } from '../../../../../../coreTypes'
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
