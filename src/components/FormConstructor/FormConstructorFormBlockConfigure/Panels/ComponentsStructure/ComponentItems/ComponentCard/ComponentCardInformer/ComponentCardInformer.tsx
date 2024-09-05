import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementInformer } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import InformerImage from './InformerImage'

export const ComponentCardInformer: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newInformer: IFormElementInformer = {
      id: uuid(),
      type: FormElementDictTypes.Informer,
      order: 1,
      props: {
        props: {
          label: 'Informer',
          title: 'Title',
          size: 's',
          status: 'success',
          view: 'filled',
          className: '',
          baseProps: {},
        },
        type: 'Informer',
      },
    }
    dispatch(setDraggableElement({ element: newInformer }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <InformerImage />
    </div>
  )
}
