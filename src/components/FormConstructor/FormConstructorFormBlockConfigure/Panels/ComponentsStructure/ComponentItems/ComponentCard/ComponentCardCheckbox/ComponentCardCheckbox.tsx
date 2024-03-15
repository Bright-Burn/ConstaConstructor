import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementCheckbox } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import CheckboxImage from './CheckboxImage'

import styles from '../styles.module.css'

export const ComponentCardCheckbox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newCheckbox: IFormElementCheckbox = {
      id: uuid(),
      type: FormElementDictTypes.Checkbox,
      props: {
        props: {
          checked: false,
          size: 's',
          view: 'primary',
          align: 'center',
          disabled: false,
          label: 'Checkbox',
          className: '',
          baseProps: {},
        },
        type: 'Checkbox',
      },
    }
    dispatch(setDraggableElement({ element: newCheckbox }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <CheckboxImage />
    </div>
  )
}
