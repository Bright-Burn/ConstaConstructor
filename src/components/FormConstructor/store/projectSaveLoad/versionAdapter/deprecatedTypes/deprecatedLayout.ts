import type {
  BaseProps,
  LayoutElementProps,
  LayoutElementStyles,
  OmitInstanceId,
} from '../../../../coreTypes'

export type LayoutElementPropsStyles_Deprecated = OmitInstanceId<
  BaseProps & {
    constaProps: LayoutElementProps
    styles: LayoutElementStyles
  }
>
