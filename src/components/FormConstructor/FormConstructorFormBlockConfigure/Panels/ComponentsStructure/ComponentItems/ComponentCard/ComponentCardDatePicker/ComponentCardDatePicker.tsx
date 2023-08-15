import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementDatePicker, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement } from '../../../../../../store'
import DatePickerImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/DatePickerImage'
import styles from '../styles.module.css'

export const ComponentCardDatePicker: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newDatePicker: IFormElementDatePicker = {
      id: uuid(),
      type: FormElementDictTypes.DatePicker,
      props: {
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
        type: 'DatePicker',
      },
    }
    dispatch(setDraggableElement({ element: newDatePicker }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <DatePickerImage />
    </div>
  )
}
