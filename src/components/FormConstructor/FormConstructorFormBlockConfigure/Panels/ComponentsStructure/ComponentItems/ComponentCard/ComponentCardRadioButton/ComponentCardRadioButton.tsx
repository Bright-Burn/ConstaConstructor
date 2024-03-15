import type { FC } from 'react'
import uuid from 'react-uuid'
import RadioImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/RadioImage'
import { Text } from '@consta/uikit/Text'

import type { IFormElementRadioButton } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import styles from '../styles.module.css'

export const ComponentCardRadioButton: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newRadioButton: IFormElementRadioButton = {
      id: uuid(),
      type: FormElementDictTypes.RadioButton,
      props: {
        props: {
          checked: false,
          size: 'm',
          view: 'primary',
          align: 'center',
          label: 'Это радиокнопка',
          className: '',
          baseProps: {},
        },
        type: 'RadioButton',
      },
    }
    dispatch(setDraggableElement({ element: newRadioButton }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <RadioImage />
    </div>
  )
}
