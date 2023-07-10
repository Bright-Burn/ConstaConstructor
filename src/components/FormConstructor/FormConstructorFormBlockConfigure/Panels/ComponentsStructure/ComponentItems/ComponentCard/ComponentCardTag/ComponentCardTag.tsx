import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementTagProps } from '../../../../../../store/formElements/tagTypes'

export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newTag: IFormElementTagProps = {
      id: uuid(),
      type: FormElementTypes.Tag,
      props: {
        size: 'm',
        label: 'Рисунок',
        mode: 'link',
        checked: false,
        className: '',
        baseProps: {},
        onChange: () => {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newTag }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
