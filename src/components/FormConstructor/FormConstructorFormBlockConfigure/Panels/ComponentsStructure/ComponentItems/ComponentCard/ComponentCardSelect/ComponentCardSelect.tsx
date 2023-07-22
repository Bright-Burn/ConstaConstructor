import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementSelect } from '../../../../../../store/formElements/selectTypes'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardSelect: FC<IComponetCardElement> = ({ name }) => {
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
    const newSelect: IFormElementSelect = {
      id: uuid(),
      type: FormElementTypes.Select,
      props: {
        content: 'Text',
        size: 'm',
        view: 'default',
        form: 'round',
        status: undefined,
        caption: 'Подпись',
        label: 'Заголовок',
        labelPosition: 'top',
        placeholder: 'Выберите цвет',
        className: '',
        baseProps: {},
        value: items[0],
        items: items,
        onChange: () => {},
      },
    }
    dispatch(setDraggableElement({ element: newSelect }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
