import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementCheckbox } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementDictTypes.Checkbox,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            checked: false,
            size: 's',
            view: 'primary',
            align: 'center',
            disabled: false,
            label: 'Checkbox',
          },
          className: '',
          baseProps: {},
          styles: {},
        },
        type: 'Checkbox',
      },
    }
    dispatch(setDraggableElement({ element: newCheckbox }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
