import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import {
  IFormElementChoiceGroup,
  FormElementDictTypes,
  DeepWriteable,
} from '../../../../../../coreTypes'
import { Item } from '../../../../Settings/ChoiceGroupSettings/types'
import { setDraggableElement } from '../../../../../../store'
import styles from '../styles.module.css'
import ChoiceGroupImage from './ChoiceGroupImage'

export const ComponentCardChoiceGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items: DeepWriteable<Item[]> = [
      {
        label: 'Первый',
        disabled: false,
      },
      {
        label: 'Второй',
        disabled: true,
      },
      {
        label: 'Третий',
        disabled: false,
      },
    ]
    const newChoiceGroup: IFormElementChoiceGroup = {
      id: uuid(),
      type: FormElementDictTypes.ChoiceGroup,
      props: {
        props: {
          size: 'm',
          name: 'ChoiceGroupExample',
          items: items,
          className: '',
          baseProps: {},
          onChange: () => {},
          getItemLabel: (item: DeepWriteable<Item>) => item.label,
        },
        type: 'ChoiceGroup',
      },
    }
    dispatch(setDraggableElement({ element: newChoiceGroup }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <ChoiceGroupImage />
    </div>
  )
}
