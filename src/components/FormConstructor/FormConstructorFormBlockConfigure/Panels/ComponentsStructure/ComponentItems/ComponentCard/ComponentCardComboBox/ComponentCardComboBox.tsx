import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IComponetCardElement } from '../types'
import { IFormElementComboBox, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import ComboboxImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/ComboboxImage'
import styles from '../styles.module.css'

export const ComponentCardComboBox: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый',
        id: 1,
      },
      {
        label: 'Второй',
        id: 2,
      },
      {
        label: 'Третий',
        id: 3,
      },
    ]
    const newTabs: IFormElementComboBox = {
      id: uuid(),
      type: FormElementDictTypes.ComboBox,
      props: {
        props: {
          size: 'm',
          placeholder: 'placeholder',
          caption: 'Хорошо подумайте, это важно',
          label: 'Здесь можно выбрать цвет',
          view: 'default',
          className: '',
          baseProps: {},
          items: items,
          onChange: () => {},
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
