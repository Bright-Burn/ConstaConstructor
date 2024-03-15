import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementList } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import ListImage from './ListImage'

import styles from '../styles.module.css'

export const ComponentCardList: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
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

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <ListImage />
    </div>
  )
}
