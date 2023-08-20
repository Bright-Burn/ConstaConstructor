import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementTagProps, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newTag: IFormElementTagProps = {
      id: uuid(),
      type: FormElementDictTypes.Tag,
      props: {
        props: {
          size: 'm',
          label: 'Рисунок',
          mode: 'link',
          checked: false,
          className: '',
          baseProps: {},
        },
        type: 'Tag'
      },
    }
    dispatch(setDraggableElement({ element: newTag }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
