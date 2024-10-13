import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementIcon } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardIcon: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newIcon: IFormElementIcon = {
      id: uuid(),
      type: FormElementDictTypes.Icon,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            view: 'primary',
            size: 'm',
            icons: 'IconAlert',
          },
          baseProps: {},
          className: '',
          styles: {},
        },
        type: 'Icon',
      },
    }
    dispatch(setDraggableElement({ element: newIcon }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
