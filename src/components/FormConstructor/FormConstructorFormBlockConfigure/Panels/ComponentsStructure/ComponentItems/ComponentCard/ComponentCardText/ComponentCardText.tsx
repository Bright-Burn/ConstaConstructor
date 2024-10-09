import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementText } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newText: IFormElementText = {
      id: uuid(),
      type: FormElementDictTypes.Text,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            content: 'Text',
            size: 's',
            transformText: {},
          },
          styles: {
            color: undefined,
          },
          className: '',
          baseProps: {},
        },
        type: 'Text',
      },
    }
    dispatch(setDraggableElement({ element: newText }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
