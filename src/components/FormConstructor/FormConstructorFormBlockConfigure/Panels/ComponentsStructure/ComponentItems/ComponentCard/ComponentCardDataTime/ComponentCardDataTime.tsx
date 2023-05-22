import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementDataTime } from '../../../../../../store/formElements/dataTimeTypes'

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
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
