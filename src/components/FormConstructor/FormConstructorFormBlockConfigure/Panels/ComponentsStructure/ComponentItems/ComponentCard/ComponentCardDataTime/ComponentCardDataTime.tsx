import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDataTime } from '../../../../../../store/formElements/dataTimeTypes'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'
import styles from './styles.module.css'

export const ComponentCardDataTime: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newDataTime: IFormElementDataTime = {
      id: uuid(),
      type: FormElementTypes.DataTime,
      props: {
        type: 'date',
        view: 'classic',
        className: '',
        baseProps: {},
        multiplicityHours: 1,
        multiplicityMinutes: 1,
        multiplicitySeconds: 1,
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newDataTime }))
  }

  return (
    <div
      className={`${styles.cardDataTime}`}
      draggable={true}
      onDragStart={onStartDragComponentCard}>
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}
