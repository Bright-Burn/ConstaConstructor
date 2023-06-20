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
  const [breadcrumbsProps, setBreadcrumbsProps] = useState<BreadcrumbProps>()

  useLayoutEffect(() => {
    const breadcrumbsFormElement = element as IFormElementBreadcrumbs
    setBreadcrumbsProps(breadcrumbsFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.BreadcrumbsForm}>
      <Breadcrumbs items={pagesSubMenu} {...breadcrumbsProps} />
    </SelectableLayer>
  )
}
