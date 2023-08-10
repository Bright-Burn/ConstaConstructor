import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IComponetCardElement } from '../types'
import { IFormElementDataTime, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'

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
          events: events,
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
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
