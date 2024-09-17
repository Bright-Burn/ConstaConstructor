import type { FC } from 'react'
import uuid from 'react-uuid'

import type { ChoiceGroupItem, IFormElementChoiceGroup } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardChoiceGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const items: ChoiceGroupItem[] = [
      {
        label: 'Первый',
      },
      {
        label: 'Второй',
      },
      {
        label: 'Третий',
      },
    ]
    const newChoiceGroup: IFormElementChoiceGroup = {
      id: uuid(),
      type: FormElementDictTypes.ChoiceGroup,
      order: 1,
      props: {
        props: {
          size: 'm',
          name: 'ChoiceGroupExample',
          items,
          width: 'default',
          className: '',
          baseProps: {},
        },
        type: 'ChoiceGroup',
      },
    }
    dispatch(setDraggableElement({ element: newChoiceGroup }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
