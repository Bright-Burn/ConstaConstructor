import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IComponetCardElement } from '../types'
import { IFormElementComboBox, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
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
      type: FormElementDictTypes.ComboBox,
      props: {
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
          type: 'ComboBox'
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
