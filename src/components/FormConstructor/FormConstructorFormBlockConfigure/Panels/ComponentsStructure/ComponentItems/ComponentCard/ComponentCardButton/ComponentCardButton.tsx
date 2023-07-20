import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import {
  FormElementTypes,
  IFormElementButton,
  useAppDispatch,
} from '../../../../../../store/formElements'
import {
  setDraggableElement
} from '../../../../../../store'
import { IComponetCardElement } from '../types'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: IFormElementButton = {
      id: uuid(),
      type: FormElementTypes.Button,
      props: {
        size: 'm',
        action: 'none',
        disabled: false,
        label: 'Кнопка',
        view: 'primary',
        form: 'default',
        width: 'default',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newButton }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
