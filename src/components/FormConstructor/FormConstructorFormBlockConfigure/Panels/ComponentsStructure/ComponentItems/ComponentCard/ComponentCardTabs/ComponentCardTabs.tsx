import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { IFormElementTabs, FormElementDictTypes } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import TabsImage from '@consta/uikit/__internal__/src/uiKit/components/ComponentsGridWithData/data/images/TabsImage'
import styles from '../styles.module.css'

export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ]
    const newTabs: IFormElementTabs = {
      id: uuid(),
      type: FormElementDictTypes.Tabs,
      props: {
        props: {
          view: 'clear',
          className: '',
          baseProps: {},
          value: items[0],
          items: items,
          onChange: () => {},
          linePosition: 'top',
          fitMode: 'dropdown',
          size: 'm',
        },
        type: 'Tabs',
      },
    }
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <Text className={styles.paddingText}>{name}</Text>
      <TabsImage />
    </div>
  )
}
