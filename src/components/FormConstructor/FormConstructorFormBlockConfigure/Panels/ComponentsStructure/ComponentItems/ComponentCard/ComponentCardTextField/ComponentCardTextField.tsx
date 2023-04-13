import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import {
  formConstructorSlice,
  FormElementTypes,
  IFormElementTextField,
} from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'

export const ComponentCardTextField: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newTextField: IFormElementTextField = {
      id: uuid(),
      type: FormElementTypes.TextField,
      props: {
        type: 'text',
        width: 'default',
        form: 'default',
        size: 'm',
        view: 'default',
        caption: 'Подпись',
        label: 'Заголовок',
        labelPosition: 'top',
        maxLength: 200,
        placeholder: 'Подсказка в поле',
        step: '1',
        min: '0',
        max: '200',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newTextField }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
