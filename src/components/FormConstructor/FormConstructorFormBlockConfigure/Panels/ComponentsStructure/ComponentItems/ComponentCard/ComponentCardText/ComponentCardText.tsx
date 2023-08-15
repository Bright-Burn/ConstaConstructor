import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes, IFormElementText } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import TextImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/TextImage'
import styles from '../styles.module.css'

export const ComponentCardText: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newText: IFormElementText = {
      id: uuid(),
      type: FormElementDictTypes.Text,
      props: {
        props: {
          content: 'Text',
          size: 's',
          className: '',
          baseProps: {},
        },
        type: 'Text',
      },
    }
    dispatch(setDraggableElement({ element: newText }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TextImage />
    </div>
  )
}
