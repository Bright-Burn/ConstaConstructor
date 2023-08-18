import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import { FormElementDictTypes } from '../../../../../../coreTypes'
import { IComponetCardElement } from '../types'
import { IFormElementBreadcrumbs } from './types'
import { pagesSubMenu } from '../../../../../Elements/BreadcrumbsFormElement/mocks'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
export const ComponentCardBreadcrumb: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBreadcrumb: IFormElementBreadcrumbs = {
      id: uuid(),
      type: FormElementDictTypes.BreadcrumbsForm,
      props: {
        props: {
          items: pagesSubMenu,
          size: 'm',
          fitMode: 'dropdown',
          className: '',
          baseProps: {},
        },
        type: 'BreadcrumbsFormElement'
      },
    }
    dispatch(setDraggableElement({ element: newBreadcrumb }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
