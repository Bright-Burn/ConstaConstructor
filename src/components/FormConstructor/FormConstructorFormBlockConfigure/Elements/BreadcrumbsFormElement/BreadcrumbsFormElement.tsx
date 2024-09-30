import type { FC } from 'react'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBreadcrumbsFormElement } from './types'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const breadcrumbsConstaProps = props?.constaProps
  const className = props?.className

  if (!breadcrumbsConstaProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.BreadcrumbsForm}>
      <Breadcrumbs className={className} {...breadcrumbsConstaProps} />
    </SelectableLayer>
  )
}
