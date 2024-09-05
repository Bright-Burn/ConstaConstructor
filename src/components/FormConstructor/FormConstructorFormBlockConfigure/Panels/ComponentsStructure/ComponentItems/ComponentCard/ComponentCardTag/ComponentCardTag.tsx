import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementTagProps } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import TagImage from './TagImage'

export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newTag: IFormElementTagProps = {
      id: uuid(),
      type: FormElementDictTypes.Tag,
      order: 1,
      props: {
        props: {
          size: 'm',
          label: 'Рисунок',
          mode: 'link',
          checked: false,
          className: '',
          baseProps: {},
        },
        type: 'Tag',
      },
    }
    dispatch(setDraggableElement({ element: newTag }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <TagImage />
    </div>
  )
}
