import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IFormElementTabs } from '../../../../../../store/formElements/tabsTypes'
import { IComponetCardElement } from '../types'
import { setDraggableElement } from '../../../../../../store'
export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

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
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
