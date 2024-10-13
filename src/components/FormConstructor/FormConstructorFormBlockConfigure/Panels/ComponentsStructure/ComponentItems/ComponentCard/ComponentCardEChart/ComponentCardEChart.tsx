import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementEChart } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardEChart: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newEChart: IFormElementEChart = {
      id: uuid(),
      type: FormElementDictTypes.EChart,
      order: 1,
      props: {
        props: {
          uiLibProps: { options: '' },
          className: '',
          baseProps: {},
          styles: {
            height: 400,
            width: 500,
          },
        },
        type: 'EChart',
      },
    }

    dispatch(setDraggableElement({ element: newEChart }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
