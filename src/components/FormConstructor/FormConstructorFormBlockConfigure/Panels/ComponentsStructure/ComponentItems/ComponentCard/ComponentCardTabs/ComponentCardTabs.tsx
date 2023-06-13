import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IFormElementTabs } from '../../../../../../store/formElements/tabsTypes'
import { IComponetCardElement } from '../types'
import { IconDraggable } from '@consta/icons/IconDraggable'
import { IconQuestion } from '@consta/icons/IconQuestion'
import styles from './styles.module.css'

export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ]
    const newTabs: IFormElementTabs = {
      id: uuid(),
      type: FormElementTypes.Tabs,
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
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newTabs }))
  }

  return (
    <div className={`${styles.cardTabs}`} draggable={true} onDragStart={onStartDragComponentCard}>
      <IconDraggable size='xs' className={`${styles.cardIconDraggable}`} />
      <Text>{name}</Text>
      <IconQuestion size='xs' className={`${styles.cardIconQuest}`} />
    </div>
  )
}
