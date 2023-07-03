import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IFormElementTabs } from '../../../../../../store/formElements/tabsTypes'
import { IComponetCardElement } from '../types'
import { usePagesSelector } from '../../../../../../store/pagesOfLayout'

export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const pages = usePagesSelector(state => state.pagesOfLayout.pages)

  const activePage = pages.find(active => active.isActive === true)

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ]
    const newTabs: IFormElementTabs = {
      id: uuid(),
      type: FormElementTypes.Tabs,
      page: activePage?.name,
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
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
