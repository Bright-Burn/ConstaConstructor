import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementButton } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    dispatch(setDraggableElement({ element: initButton }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}

const initButton: IFormElementButton = {
  id: uuid(),
  type: FormElementDictTypes.Button,
  order: 1,
  props: {
    props: {
      constaProps: {
        size: 'm',
        disabled: false,
        label: 'Кнопка',
        view: 'primary',
        form: 'default',
        width: 'default',
      },
      className: '',
      styles: {},
      baseProps: {},
    },
    type: 'Button',
  },
}
