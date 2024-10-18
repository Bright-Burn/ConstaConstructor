import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementInformer } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardInformer: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newInformer: IFormElementInformer = {
      id: uuid(),
      type: FormElementDictTypes.Informer,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            label: 'Informer',
            title: 'Title',
            size: 's',
            status: 'success',
            view: 'filled',
          },
          className: '',
          baseProps: {},
          styles: {},
        },
        type: 'Informer',
      },
    }
    dispatch(setDraggableElement({ element: newInformer }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
