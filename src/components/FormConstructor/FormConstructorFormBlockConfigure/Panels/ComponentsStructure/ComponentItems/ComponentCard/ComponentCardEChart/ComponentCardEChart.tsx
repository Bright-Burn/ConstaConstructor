import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementEChart } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import styles from '../styles.module.css'

export const ComponentCardEChart: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newEChart: IFormElementEChart = {
      id: uuid(),
      type: FormElementDictTypes.EChart,
      order: 1,
      props: {
        props: { options: '', className: '', baseProps: {}, height: 400, width: 500 },
        type: 'EChart',
      },
    }

    dispatch(setDraggableElement({ element: newEChart }))
  }

  return (
    <div draggable={true} className={styles.cardHeight} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
    </div>
  )
}
