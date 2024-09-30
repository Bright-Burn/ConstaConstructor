import type { FC } from 'react'
import uuid from 'react-uuid'

import { FormElementDictTypes } from '../../../../../../coreTypes'
import { setDraggableElement, useAppDispatch } from '../../../../../../store'
import { pagesSubMenu } from '../../../../../Elements'
import { CardLabel } from '../CardLabel'
import type { IComponetCardElement } from '../types'

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
          constaProps: {
            items: pagesSubMenu,
            size: 'm',
            fitMode: 'dropdown',
          },
          styles: {},
          baseProps: {},
          className: '',
        },
        type: 'BreadcrumbsFormElement',
      },
    }
    dispatch(setDraggableElement({ element: newBreadcrumb }))
  }

  return <CardLabel label={name} onStartDragComponentCard={onStartDragComponentCard} />
}
