import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementComboBox } from '../../../../../../store/formElements/comboBoxTypes'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardComboBox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый',
        id: 1,
      },
      {
        label: 'Второй',
        id: 2,
      },
      {
        label: 'Третий',
        id: 3,
      },
    ]
    const newTabs: IFormElementComboBox = {
      id: uuid(),
      type: FormElementTypes.ComboBox,
      props: {
        size: 'm',
        placeholder: 'placeholder',
        caption: 'Хорошо подумайте, это важно',
        label: 'Здесь можно выбрать цвет',
        view: 'default',
        className: '',
        baseProps: {},
        items: items,
        onChange: () => {},
      },
    }
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
