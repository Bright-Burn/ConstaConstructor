import type { FC } from 'react'
import uuid from 'react-uuid'

import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { pagesSubMenu } from '../../../../../Elements'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

import BreadcrumbsImage from './BreadcrumbsImage'
import type { IFormElementBreadcrumbs } from './types'

export const ComponentCardBreadcrumb: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = () => {
    const newBreadcrumb: IFormElementBreadcrumbs = {
      id: uuid(),
      type: FormElementDictTypes.BreadcrumbsForm,
      order: 1,
      props: {
        props: {
          items: pagesSubMenu,
          size: 'm',
          fitMode: 'dropdown',
          className: '',
          baseProps: {},
        },
        type: 'BreadcrumbsFormElement',
      },
    }
    dispatch(setDraggableElement({ element: newBreadcrumb }))
  }

  return (
    <div draggable={true} onDragStart={onStartDragComponentCard}>
      <CardLabel label={name} />
      <BreadcrumbsImage />
    </div>
  )
}
