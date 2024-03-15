import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementDataTime } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import DateTimeImage from './DateTimeImage'

import styles from '../styles.module.css'

export const ComponentCardDataTime: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()
  const onStartDragComponentCard = (event: React.DragEvent) => {
    const events = [new Date()]
    const newDataTime: IFormElementDataTime = {
      id: uuid(),
      type: FormElementDictTypes.DataTime,
      props: {
        props: {
          type: 'date',
          view: 'classic',
          className: '',
          baseProps: {},
          events,
          multiplicityHours: 1,
          multiplicityMinutes: 1,
          multiplicitySeconds: 1,
        },
        type: 'DataTime',
      },
    }
    dispatch(setDraggableElement({ element: newDataTime }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <DateTimeImage />
    </div>
  )
}
