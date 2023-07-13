import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDatePicker } from '../../../../../../store/formElements/datePickerTypes'

export const ComponentCardDatePicker: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const events = [new Date(2023, 6, 15)]
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
        events: events,
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newDatePicker }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
