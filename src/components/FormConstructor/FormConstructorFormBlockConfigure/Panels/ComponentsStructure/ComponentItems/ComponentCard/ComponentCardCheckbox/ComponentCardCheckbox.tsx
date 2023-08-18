import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementCheckbox } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementDictTypes.Checkbox,
      props: {
        props: {
          checked: false,
          size: 's',
          view: 'primary',
          align: 'center',
          disabled: false,
          label: 'Checkbox',
          className: '',
          baseProps: {},
        },
        type: 'Checkbox'
      },
    }
    dispatch(setDraggableElement({ element: newCheckbox }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
