import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { ChoiceGroupItem, IFormElementChoiceGroup } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import ChoiceGroupImage from './ChoiceGroupImage'

import styles from '../styles.module.css'

export const ComponentCardChoiceGroup: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const items: ChoiceGroupItem[] = [
      {
        label: 'Первый',
      },
      {
        label: 'Второй',
      },
      {
        label: 'Третий',
      },
    ]
    const newChoiceGroup: IFormElementChoiceGroup = {
      id: uuid(),
      type: FormElementDictTypes.ChoiceGroup,
      order: 1,
      props: {
        props: {
          size: 'm',
          name: 'ChoiceGroupExample',
          items,
          width: 'default',
          className: '',
          baseProps: {},
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
