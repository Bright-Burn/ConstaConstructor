import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementSwitch } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import SwitchImage from './SwitchImage'

import styles from '../styles.module.css'

export const ComponentCardSwitch: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newSwitch: IFormElementSwitch = {
      id: uuid(),
      type: FormElementDictTypes.Switch,
      order: 1,
      props: {
        props: {
          size: 'm',
          view: 'primary',
          align: 'center',
          label: 'Это переключатель',
          className: '',
          baseProps: {},
        },
        type: 'Switch',
      },
    }
    dispatch(setDraggableElement({ element: newSwitch }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <SwitchImage />
    </div>
  )
}
