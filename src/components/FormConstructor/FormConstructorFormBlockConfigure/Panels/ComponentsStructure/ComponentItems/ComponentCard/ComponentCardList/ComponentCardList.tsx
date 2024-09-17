import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementList } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardList: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const items = [
      {
        label: 'Первый — этот вариант не выбрать',
        id: 1,
        disabled: false,
      },
      {
        label: 'Второй',
        id: 2,
        disabled: false,
      },
      {
        label: 'Третий — и этот тоже не выбрать',
        id: 3,
        disabled: false,
      },
    ]
    const newList: IFormElementList = {
      id: uuid(),
      type: FormElementDictTypes.List,
      order: 1,
      props: {
        props: {
          size: 's',
          innerOffset: 'normal',
          className: '',
          baseProps: {},
          items,
        },
        type: 'List',
      },
    }
    dispatch(setDraggableElement({ element: newList }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
