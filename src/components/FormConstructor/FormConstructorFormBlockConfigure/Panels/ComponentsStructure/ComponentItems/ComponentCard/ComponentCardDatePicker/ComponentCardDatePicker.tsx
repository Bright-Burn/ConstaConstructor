import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDatePicker } from '../../../../../../store/formElements/datePickerTypes'
import {
  setDraggableElement
} from '../../../../../../store'
export const ComponentCardDatePicker: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newDatePicker: IFormElementDatePicker = {
      id: uuid(),
      type: FormElementTypes.DatePicker,
      props: {
        type: 'date',
        form: 'default',
        status: undefined,
        label: 'Заголовок',
        caption: 'Подпись',
        labelPosition: 'top',
        size: 'm',
        view: 'default',
        dateTimeView: 'classic',
        dropdownForm: 'default',
        className: '',
        baseProps: {},
      },
    }
    dispatch(setDraggableElement({ element: newDatePicker }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
