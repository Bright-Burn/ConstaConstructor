import { BreadcrumbProps } from '../../../coreTypes'
import { BreadcrumbProps_Deprecated } from './deprecatedTypes'

export type BreadCrumbsAdapter = (
  instanceId: string,
  deprecated: BreadcrumbProps_Deprecated,
) => BreadcrumbProps

export const breadCrumbsAdapter: BreadCrumbsAdapter = (id, deprecated) => {
  console.info(`Run adapter for BreadCrumbs instance with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      fitMode: deprecated.fitMode,
      items: deprecated.items,
      size: deprecated.size,
      lastItemIsLink: deprecated.lastItemIsLink,
    },
  }
}
