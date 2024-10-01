import type { FC } from 'react'
import type { DefaultItem } from '@consta/uikit/Breadcrumbs'
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'

import type { DefaultItemBreadcrumbsType } from '../../../coreTypes'
import { ElementTypes, FormElementDictTypes, Icons } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import type { IBreadcrumbsFormElement } from './types'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props

  const breadcrumbsConstaProps = props?.uiLibProps
  const className = props?.className

  if (!breadcrumbsConstaProps) {
    return null
  }

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.BreadcrumbsForm}>
      <Breadcrumbs
        className={className}
        size={breadcrumbsConstaProps.size}
        fitMode={breadcrumbsConstaProps.fitMode}
        lastItemIsLink={breadcrumbsConstaProps.lastItemIsLink}
        items={breadcrumbsConstaProps.items.map(itemAdapter)}
      />
    </SelectableLayer>
  )
}

/**
 * Адаптер для элементов хлебных крошек
 * @param item Элемент хлебных крошек
 * @returns
 */
const itemAdapter = (item: DefaultItemBreadcrumbsType): DefaultItem => {
  return {
    label: item.label,
    href: item.href,
    icon: item.icon ? Icons[item.icon] : undefined,
    subMenu: item.subMenu,
  }
}
