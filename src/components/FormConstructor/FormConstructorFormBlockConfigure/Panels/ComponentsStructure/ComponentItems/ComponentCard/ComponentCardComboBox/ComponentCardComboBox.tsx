import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementComboBox } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import ComboboxImage from './ComboboxImage'

import styles from '../styles.module.css'

export const ComponentCardComboBox: FC<IComponetCardElement> = ({ name }) => {
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
    const newTabs: IFormElementComboBox = {
      id: uuid(),
      type: FormElementDictTypes.ComboBox,
      order: 1,
      props: {
        props: {
          size: 'm',
          placeholder: 'Выберите из списка',
          caption: 'Подпись',
          label: 'Заголовок',
          view: 'default',
          groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
          className: '',
          baseProps: {},
          items,
        },
        type: 'ComboBox',
      },
    }
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <ComboboxImage />
    </div>
  )
}
