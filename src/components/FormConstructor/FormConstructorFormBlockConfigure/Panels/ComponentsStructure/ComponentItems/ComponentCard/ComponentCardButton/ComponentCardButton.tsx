import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementButton } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import ButtonImage from './ButtonImage'

import styles from '../styles.module.css'

export const ComponentCardButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newButton: IFormElementButton = {
      id: uuid(),
      type: FormElementDictTypes.Button,
      props: {
        props: {
          size: 'm',
          action: 'none',
          disabled: false,
          label: 'Кнопка',
          view: 'primary',
          form: 'default',
          width: 'default',
          className: '',
          baseProps: {},
        },
        type: 'Button',
      },
    }
    dispatch(setDraggableElement({ element: newButton }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <ButtonImage />
    </div>
  )
}
