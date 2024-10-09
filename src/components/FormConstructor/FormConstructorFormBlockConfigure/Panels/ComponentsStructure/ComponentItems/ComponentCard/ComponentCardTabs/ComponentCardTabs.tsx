import type { FC } from 'react'
import uuid from 'react-uuid'

import type { IFormElementTabs } from '../../../../../../coreTypes'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

export const ComponentCardTabs: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const items = [
      { id: 0, label: 'tab1' },
      { id: 1, label: 'tab2' },
    ]
    const newTabs: IFormElementTabs = {
      id: uuid(),
      type: FormElementDictTypes.Tabs,
      order: 1,
      props: {
        props: {
          uiLibProps: {
            view: 'clear',
            value: items[0],
            items,
            linePosition: 'top',
            fitMode: 'dropdown',
            size: 'm',
          },
          styles: {},
          className: '',
          baseProps: {},
        },
        type: 'Tabs',
      },
    }
    dispatch(setDraggableElement({ element: newTabs }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
