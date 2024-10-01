import {
  OmitInstanceId,
  BaseProps,
  LayoutElementProps,
  LayoutElementStyles,
} from '../../../../coreTypes'

export type LayoutElementPropsStyles_Deprecated = OmitInstanceId<
  BaseProps & {
    constaProps: LayoutElementProps
    styles: LayoutElementStyles
  }
>
