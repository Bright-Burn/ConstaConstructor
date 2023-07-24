import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IComponetCardElement } from '../types'
import { IFormElementDataTime, FormElementTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'

export const ComponentCardDataTime: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

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
