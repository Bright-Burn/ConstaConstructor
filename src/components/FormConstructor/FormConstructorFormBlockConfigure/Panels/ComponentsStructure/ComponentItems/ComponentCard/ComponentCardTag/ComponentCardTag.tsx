import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementTagProps } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newTag: IFormElementTagProps = {
      id: uuid(),
      type: FormElementDictTypes.Tag,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            size: 'm',
            label: 'Рисунок',
            mode: 'link',
            checked: false,
          },
          styles: {},
          className: '',
          baseProps: {},
        },
        type: 'Tag',
      },
    }
    dispatch(setDraggableElement({ element: newTag }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
