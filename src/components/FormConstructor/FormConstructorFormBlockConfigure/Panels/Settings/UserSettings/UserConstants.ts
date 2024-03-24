import type { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'

export const sizes: UserPropSize[] = ['m', 's', 'l']
export type sizeType = (typeof sizes)[number]
export const views: UserPropView[] = ['ghost', 'clear']
export type viewsType = (typeof views)[number]
export const width: UserPropWidth[] = ['default', 'full']
export type widthType = (typeof width)[number]
export const status: UserPropStatus[] = ['available', 'out', 'remote']
export type statusType = (typeof status)[number]
