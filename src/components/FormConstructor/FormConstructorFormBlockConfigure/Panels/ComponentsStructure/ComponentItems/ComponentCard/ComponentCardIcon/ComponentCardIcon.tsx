import type { FC } from 'react'
import uuid from 'react-uuid'
import { Text } from '@consta/uikit/Text'

import type { IFormElementIcon } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import IconImage from './IconImage'

import styles from '../styles.module.css'

export const ComponentCardIcon: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newIcon: IFormElementIcon = {
      id: uuid(),
      type: FormElementDictTypes.Icon,
      order: 1,
      props: {
        props: {
          view: 'primary',
          size: 'm',
          className: '',
          icons: 'IconAlert',
          baseProps: {},
        },
        type: 'Icon',
      },
    }
    dispatch(setDraggableElement({ element: newIcon }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <IconImage />
    </div>
  )
}
