import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDatePicker } from '../../../../../../store/formElements/datePickerTypes'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'
import styles from './styles.module.css'

export const ComponentCardDatePicker: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

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
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newDatePicker }))
  }

  return (
    <div
      className={`${styles.cardDataPicker}`}
      draggable={true}
      onDragStart={onStartDragComponentCard}>
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}
