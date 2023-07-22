import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  useAppDispatch,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementTagProps } from '../../../../../../store/formElements/tagTypes'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

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
