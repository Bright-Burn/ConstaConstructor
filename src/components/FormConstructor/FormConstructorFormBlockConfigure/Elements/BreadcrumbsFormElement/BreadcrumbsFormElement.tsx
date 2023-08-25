import { FC } from 'react'
import { BreadcrumbProps, ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IBreadcrumbsFormElement } from './types'

import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'
import { BrandProps } from '../../../coreTypes/types'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = element.props as BrandProps<BreadcrumbProps, 'BreadcrumbsFormElement'>
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.BreadcrumbsForm}
    >
      <Breadcrumbs {...props.props} />
    </SelectableLayer>
  )
}
