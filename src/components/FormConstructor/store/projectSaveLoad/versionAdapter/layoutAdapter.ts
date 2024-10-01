import { LayoutElementPropsStyles } from '../../../coreTypes'
import { LayoutElementPropsStyles_Deprecated } from './deprecatedTypes'

export type LayoutAdapter = (
  instanceId: string,
  deprecated: LayoutElementPropsStyles_Deprecated,
) => LayoutElementPropsStyles

export const layoutAdapter: LayoutAdapter = (id, deprecated) => {
  console.log(`Run layout adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: deprecated.styles,
    uiLibProps: deprecated.constaProps,
  }
}
