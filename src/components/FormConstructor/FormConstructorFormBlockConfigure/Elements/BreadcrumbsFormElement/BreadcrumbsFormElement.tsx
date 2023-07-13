import { FC } from 'react'
import { ElementTypes, FormElementTypes } from '../../../store/formElements/types'
import { SelectableLayer } from '../../SelectableLayer'
import { IBreadcrumbsFormElement } from './types'
import { BreadcrumbProps } from '../../../store/formElements/BreadcrumbsTypes'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = element.props as BreadcrumbProps
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.BreadcrumbsForm}>
      <Breadcrumbs {...props} />
    </SelectableLayer>
  )
}
