import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementCollapse } from '../../../../../../store/formElements/collapseTypes'

export const ComponentCardCollapse: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCollapse: IFormElementCollapse = {
      id: uuid(),
      type: FormElementTypes.Collapse,
      props: {
        size: 'm',
        label: 'Заголовок',
        children:
          'Здесь может быть что угодно. Например, этот текст. Но не обязательно: вы можете добавить иконки, кнопки, картинки или даже мини-игру (ну вдруг). Удивительная штука: никогда не угадаешь, что прячется под этим заголовком.',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newCollapse }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
