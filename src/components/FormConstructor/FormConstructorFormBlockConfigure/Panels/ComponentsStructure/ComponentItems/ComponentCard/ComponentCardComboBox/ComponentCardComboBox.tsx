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
        group: 'Первая группа',
        id: 1,
      },
      {
        label: 'Второй',
        group: 'Первая группа',
        id: 2,
      },
      {
        label: 'Третий',
        group: 'Первая группа',
        id: 3,
      },
    ]
    const newTabs: IFormElementComboBox = {
      id: uuid(),
      type: FormElementDictTypes.ComboBox,
      props: {
        props: {
          size: 'm',
          placeholder: 'Выберите из списка',
          caption: 'Подпись',
          label: 'Заголовок',
          view: 'default',
          groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
          className: '',
          baseProps: {},
          items: items,
          onChange: () => {},
        },
        type: 'ComboBox',
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
