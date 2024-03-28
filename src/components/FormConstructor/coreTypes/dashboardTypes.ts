import type { BaseProps, BrandProps, IFormElement } from './types'

export type DashboardProps = {
  children?: never
} & BaseProps

export interface IFormElementDashboard extends IFormElement {
  props: BrandDashboardProps
}
export type BrandDashboardProps = BrandProps<DashboardProps, 'Dashboard'>
