import type { BaseProps, BrandProps, OmitInstanceId, IFormElement } from './types'

export type DashboardProps = {
  children?: never
} & BaseProps

export type IFormElementDashboard = OmitInstanceId<
  IFormElement & {
    props: BrandDashboardProps
  }
>

export type BrandDashboardProps = BrandProps<DashboardProps, 'Dashboard'>
