import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementTabs } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import TabsImage from './TabsImage'

import styles from '../styles.module.css'

export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ]
    const newTabs: IFormElementTabs = {
      id: uuid(),
      type: FormElementDictTypes.Tabs,
      props: {
        props: {
          view: 'clear',
          className: '',
          baseProps: {},
          value: items[0],
          items,
          linePosition: 'top',
          fitMode: 'dropdown',
          size: 'm',
        },
        type: 'Tabs',
      },
    }
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TabsImage />
    </div>
  )
}
