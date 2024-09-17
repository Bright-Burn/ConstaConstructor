import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementTextField } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardTextField: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newTextField: IFormElementTextField = {
      id: uuid(),
      type: FormElementDictTypes.TextField,
      order: 1,
      props: {
        props: {
          type: 'text',
          form: 'default',
          size: 'm',
          view: 'default',
          caption: 'Подпись',
          label: 'Заголовок',
          labelPosition: 'top',
          maxLength: 200,
          placeholder: 'Подсказка в поле',
          step: '1',
          min: '0',
          max: '200',
          className: '',
          baseProps: {},
        },
        type: 'TextField',
      },
    }
    dispatch(setDraggableElement({ element: newTextField }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
