import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementBadge } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import BadgeImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/BadgeImage'
import styles from '../styles.module.css'

export const ComponentCardBadge: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBadge: IFormElementBadge = {
      id: uuid(),
      type: FormElementDictTypes.Badge,
      props: {
        props: {
          label: 'Badge',
          form: 'default',
          size: 's',
          status: 'success',
          view: 'filled',
          className: '',
          baseProps: {},
        },
        type: 'Badge',
      },
    }

    dispatch(setDraggableElement({ element: newBadge }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <BadgeImage />
    </div>
  )
}
