import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, IFormElementTextField } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'

export const ComponentCardTextField: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

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
    dispatch(setDraggableElement({ element: newTextField }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
