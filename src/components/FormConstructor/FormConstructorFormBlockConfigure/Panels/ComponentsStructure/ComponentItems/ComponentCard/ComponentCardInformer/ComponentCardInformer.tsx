import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, IFormElementInformer } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'

export const ComponentCardInformer: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

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
    dispatch(setDraggableElement({ element: newInformer }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
