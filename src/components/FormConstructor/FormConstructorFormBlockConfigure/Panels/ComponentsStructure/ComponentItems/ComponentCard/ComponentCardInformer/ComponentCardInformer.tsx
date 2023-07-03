import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementInformer,
  useAppSelector,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardInformer: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = useAppSelector(state => state.formConstructor.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newInformer: IFormElementInformer = {
      id: uuid(),
      type: FormElementTypes.Informer,
      page: activePage?.name,
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
