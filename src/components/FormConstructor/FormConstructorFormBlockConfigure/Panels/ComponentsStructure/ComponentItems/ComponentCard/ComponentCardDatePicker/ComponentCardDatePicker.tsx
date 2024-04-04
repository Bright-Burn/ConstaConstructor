import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementDatePicker } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import DatePickerImage from './DatePickerImage'

import styles from '../styles.module.css'

export const ComponentCardDatePicker: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const events = [new Date()]
    const newDatePicker: IFormElementDatePicker = {
      id: uuid(),
      type: FormElementDictTypes.DatePicker,
      order: 1,
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
          events,
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
