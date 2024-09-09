import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementSwitch } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardSwitch: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newSwitch: IFormElementSwitch = {
      id: uuid(),
      type: FormElementDictTypes.Switch,
      order: 1,
      props: {
        props: {
          size: 'm',
          view: 'primary',
          align: 'center',
          label: 'Это переключатель',
          className: '',
          baseProps: {},
        },
        type: 'Switch',
      },
    }
    dispatch(setDraggableElement({ element: newSwitch }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
    </div>
  )
}
