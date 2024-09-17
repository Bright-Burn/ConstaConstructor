import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementDataTime } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardDataTime: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()
  const onStartDragComponentCard = () => {
    const events = [new Date()]
    const newDataTime: IFormElementDataTime = {
      id: uuid(),
      type: FormElementDictTypes.DataTime,
      order: 1,
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

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
