import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../../../../../store'
import { IComponetCardElement } from '../types'
import { IFormElementTagProps, FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement } from '../../../../../../store'
import TagImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/TagImage'
import styles from '../styles.module.css'

export const ComponentCardTag: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
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
