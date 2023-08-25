import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch, setDraggableElement } from '../../../../../../store'
import { IFormElementList, FormElementDictTypes } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
export const ComponentCardList: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый — этот вариант не выбрать',
        id: 1,
        disabled: false,
      },
      {
        label: 'Второй',
        id: 2,
        disabled: false,
      },
      {
        label: 'Третий — и этот тоже не выбрать',
        id: 3,
        disabled: false,
      },
    ]
    const newList: IFormElementList = {
      id: uuid(),
      type: FormElementDictTypes.List,
      props: {
        props: {
          size: 's',
          innerOffset: 'normal',
          className: '',
          baseProps: {},
          items: items,
        },
        type: 'List',
      },
    }
    dispatch(setDraggableElement({ element: newList }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
