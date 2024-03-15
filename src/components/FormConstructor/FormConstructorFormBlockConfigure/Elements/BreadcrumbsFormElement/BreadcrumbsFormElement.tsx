import type { FC } from 'react'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'

import type { BreadcrumbProps } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import type { BrandProps } from '../../../coreTypes/types'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBreadcrumbsFormElement } from './types'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = element.props as BrandProps<BreadcrumbProps, 'BreadcrumbsFormElement'>
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.BreadcrumbsForm}>
      <Breadcrumbs {...props.props} />
    </SelectableLayer>
  )
}
