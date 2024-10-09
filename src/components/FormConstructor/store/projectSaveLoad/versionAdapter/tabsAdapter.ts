import type { TabsProps } from '../../../coreTypes'
import { TabsProps_Deprecated } from './deprecatedTypes'

import type { GenericAdapter } from './genericAdapter'

export type TabsAdapter = GenericAdapter<TabsProps_Deprecated, TabsProps>

export const tabsAdapter: TabsAdapter = (id, deprecated) => {
  console.log(`Run DatePicker adapter with id=${id}`)
  if (deprecated.fitMode) {
    return {
      baseProps: deprecated.baseProps,
      className: deprecated.className,
      styles: {},
      uiLibProps: {
        size: deprecated.size,
        onlyIcon: deprecated.onlyIcon,
        view: deprecated.view,
        iconSize: deprecated.iconSize,
        value: deprecated.value,
        items: deprecated.items,
        fitMode: deprecated.fitMode,
        linePosition: deprecated.linePosition,
      },
    }
  }
  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      size: deprecated.size,
      onlyIcon: deprecated.onlyIcon,
      view: deprecated.view,
      iconSize: deprecated.iconSize,
      value: deprecated.value,
      items: deprecated.items,
      linePosition: deprecated.linePosition,
    },
  }
}
