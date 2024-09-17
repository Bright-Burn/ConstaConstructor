import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementSelect } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardSelect: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const items = [
      {
        label: 'Первый',
        group: 'Первая группа',
        id: 1,
      },
      {
        label: 'Второй',
        group: 'Первая группа',
        id: 2,
      },
      {
        label: 'Третий',
        group: 'Первая группа',
        id: 3,
      },
    ]
    const newSelect: IFormElementSelect = {
      id: uuid(),
      type: FormElementDictTypes.Select,
      order: 1,
      props: {
        props: {
          content: 'Text',
          size: 'm',
          view: 'default',
          form: 'round',
          status: undefined,
          caption: 'Подпись',
          label: 'Заголовок',
          labelPosition: 'top',
          placeholder: 'Выберите цвет',
          groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
          className: '',
          baseProps: {},
          items,
          style: { maxWidth: '200px', minWidth: '200px' },
        },
        type: 'SelectForm',
      },
    }
    dispatch(setDraggableElement({ element: newSelect }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
