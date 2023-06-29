import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { formConstructorSlice, FormElementTypes } from '../../../../../../store/formElements'
import { IComponetCardElement } from '../types'
import { IFormElementBreadcrumbs } from '../../../../../../store/formElements/BreadcrumbsTypes'
import { pagesSubMenu } from '../../../../../Elements/BreadcrumbsFormElement/mocks'

export const ComponentCardBreadcrumb: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const newBreadcrumb: IFormElementBreadcrumbs = {
      id: uuid(),
      type: FormElementTypes.BreadcrumbsForm,
      props: {
        items: pagesSubMenu,
        size: 'm',
        fitMode: 'dropdown',
        className: '',
        baseProps: {},
      },
    }
    dispatch(formConstructorSlice.actions.setDraggableElement({ element: newBreadcrumb }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
