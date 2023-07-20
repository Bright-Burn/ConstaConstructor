import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import {
  FormElementTypes,
  IFormElementBadge,
  useAppDispatch,
} from '../../../../../../store/formElements'
import {
  setDraggableElement
} from '../../../../../../store'
import { IComponetCardElement } from '../types'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementTypes.Badge,
      props: {
        label: 'Badge',
        form: 'default',
        size: 's',
        status: 'success',
        view: 'filled',
        className: '',
        baseProps: {},
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
