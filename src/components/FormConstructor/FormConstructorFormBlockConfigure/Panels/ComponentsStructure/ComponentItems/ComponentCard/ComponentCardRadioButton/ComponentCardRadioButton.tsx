import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementRadioButton } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import RadioImage from './RadioImage'

export const ComponentCardRadioButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newRadioButton: IFormElementRadioButton = {
      id: uuid(),
      type: FormElementDictTypes.RadioButton,
      order: 1,
      props: {
        props: {
          checked: false,
          size: 'm',
          view: 'primary',
          align: 'center',
          label: 'Это радиокнопка',
          className: '',
          baseProps: {},
        },
        type: 'RadioButton',
      },
    }
    dispatch(setDraggableElement({ element: newRadioButton }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <RadioImage />
    </div>
  )
}
