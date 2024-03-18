import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementTagProps } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import type { IComponetCardElement } from '../types'

import TagImage from './TagImage'

import styles from '../styles.module.css'

export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newTag: IFormElementTagProps = {
      id: uuid(),
      type: FormElementDictTypes.Tag,
      props: {
        props: {
          size: 'm',
          label: 'Рисунок',
          mode: 'link',
          checked: false,
          className: '',
          baseProps: {},
        },
        type: 'Tag',
      },
    }
    dispatch(setDraggableElement({ element: newTag }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TagImage />
    </div>
  )
}
