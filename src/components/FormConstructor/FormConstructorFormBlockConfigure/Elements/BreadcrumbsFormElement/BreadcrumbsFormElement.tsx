import { FC, useLayoutEffect, useState } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IBreadcrumbsFormElement } from './types'
import {
  BreadcrumbProps,
  IFormElementBreadcrumbs,
} from '../../../store/formElements/BreadcrumbsTypes'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'
import { pagesSubMenu } from './mocks'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = element.props as BreadcrumbProps
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.BreadcrumbsForm}
    >
      <Breadcrumbs {...props} />
    </SelectableLayer>
  )
}
