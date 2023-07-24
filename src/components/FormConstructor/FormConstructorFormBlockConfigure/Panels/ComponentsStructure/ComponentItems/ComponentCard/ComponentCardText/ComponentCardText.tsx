import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, IFormElementText } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newText: IFormElementText = {
      id: uuid(),
      type: FormElementTypes.Text,
      props: {
        content: 'Text',
        size: 's',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newText }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
