import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementText,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

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
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newText }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
