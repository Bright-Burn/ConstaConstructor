import type { BreadcrumbProps } from '../../../coreTypes'

import type { BreadcrumbProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type BreadCrumbsAdapter = GenericAdapter<BreadcrumbProps_Deprecated, BreadcrumbProps>

export const breadCrumbsAdapter: BreadCrumbsAdapter = (id, deprecated) => {
  console.info(`Run adapter for BreadCrumbs instance with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      fitMode: deprecated.fitMode,
      items: deprecated.items.map(item => {
        return { ...item, icon: undefined }
      }),
      size: deprecated.size,
      lastItemIsLink: deprecated.lastItemIsLink,
    },
  }
}
