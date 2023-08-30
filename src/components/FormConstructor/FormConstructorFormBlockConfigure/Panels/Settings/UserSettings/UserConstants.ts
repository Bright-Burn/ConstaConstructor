import { UserPropView, UserPropWidth, UserPropSize, UserPropStatus } from '@consta/uikit/User'

export type ValueType = UserPropView | UserPropWidth | UserPropSize | UserPropStatus | string | null

export const sizes: UserPropSize[] = ['m', 's', 'l']
export const views: UserPropView[] = ['ghost', 'clear']
export const width: UserPropWidth[] = ['default', 'full']
export const status = ['available', 'out', 'remote', 'undefiend']
