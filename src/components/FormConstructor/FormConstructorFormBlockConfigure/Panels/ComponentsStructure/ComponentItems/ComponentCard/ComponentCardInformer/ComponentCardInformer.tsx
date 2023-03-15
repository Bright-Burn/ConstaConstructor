import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementInformer,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardInformer: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newInformer: IFormElementInformer = {
      id: uuid(),
      type: FormElementTypes.Informer,
      props: {
        label: 'Informer',
        title: 'Title',
        size: 's',
        status: 'success',
        view: 'filled',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newInformer }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
