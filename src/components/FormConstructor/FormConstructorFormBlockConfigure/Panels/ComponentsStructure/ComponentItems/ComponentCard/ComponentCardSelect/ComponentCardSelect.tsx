import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IComponetCardElement } from '../types'
import { IFormElementSelect, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import SelectImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/SelectImage'
import styles from '../styles.module.css'

export const ComponentCardSelect: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
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
    const newSelect: IFormElementSelect = {
      id: uuid(),
      type: FormElementDictTypes.Select,
      props: {
        props: {
          content: 'Text',
          size: 'm',
          view: 'default',
          form: 'round',
          status: undefined,
          caption: 'Подпись',
          label: 'Заголовок',
          labelPosition: 'top',
          placeholder: 'Выберите цвет',
          groups: ['Первая группа', 'Вторая группа', 'Третья группа'],
          className: '',
          baseProps: {},
          items: items,
          onChange: () => {},
        },
        type: 'SelectForm',
      },
    }
    dispatch(setDraggableElement({ element: newSelect }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <SelectImage />
    </div>
  )
}
