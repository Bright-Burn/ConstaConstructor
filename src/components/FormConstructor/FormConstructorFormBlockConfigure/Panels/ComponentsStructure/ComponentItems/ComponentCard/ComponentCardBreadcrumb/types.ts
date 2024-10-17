import type {
  BrandBreadcrumbsProps,
  IFormElement,
  OmitInstanceId,
} from '../../../../../../coreTypes'

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
