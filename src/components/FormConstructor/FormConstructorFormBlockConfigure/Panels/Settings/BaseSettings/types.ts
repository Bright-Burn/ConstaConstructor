export const paddingsLeft = [
  'Null',
  'p-l-xs',
  'p-l-s',
  'p-l-m',
  'p-l-l',
  'p-l-xl',
  'p-l-2xl',
  'p-l-3xl',
  'p-l-4xl',
  'p-l-5xl',
  'p-l-6xl',
]
export const paddingsRight = [
  'Null',
  'p-r-xs',
  'p-r-s',
  'p-r-m',
  'p-r-l',
  'p-r-xl',
  'p-r-2xl',
  'p-r-3xl',
  'p-r-4xl',
  'p-r-5xl',
  'p-r-6xl',
]
export const paddingsTop = [
  'Null',
  'p-t-xs',
  'p-t-s',
  'p-t-m',
  'p-t-l',
  'p-t-xl',
  'p-t-2xl',
  'p-t-3xl',
  'p-t-4xl',
  'p-t-5xl',
  'p-t-6xl',
]
export const paddingsBottom = [
  'Null',
  'p-b-xs',
  'p-b-s',
  'p-b-m',
  'p-b-l',
  'p-b-xl',
  'p-b-2xl',
  'p-b-3xl',
  'p-b-4xl',
  'p-b-5xl',
  'p-b-6xl',
]

export const marginLeft = [
  'Null',
  'm-l-xs',
  'm-l-s',
  'm-l-m',
  'm-l-l',
  'm-l-xl',
  'm-l-2xl',
  'm-l-3xl',
  'm-l-4xl',
  'm-l-5xl',
  'm-l-6xl',
]
export const marginRight = [
  'Null',
  'm-r-xs',
  'm-r-s',
  'm-r-m',
  'm-r-l',
  'm-r-xl',
  'm-r-2xl',
  'm-r-3xl',
  'm-r-4xl',
  'm-r-5xl',
  'm-r-6xl',
]
export const marginTop = [
  'Null',
  'm-t-xs',
  'm-t-s',
  'm-t-m',
  'm-t-l',
  'm-t-xl',
  'm-t-2xl',
  'm-t-3xl',
  'm-t-4xl',
  'm-t-5xl',
  'm-t-6xl',
]
export const marginBottom = [
  'Null',
  'm-b-xs',
  'm-b-s',
  'm-b-m',
  'm-b-l',
  'm-b-xl',
  'm-b-2xl',
  'm-b-3xl',
  'm-b-4xl',
  'm-b-5xl',
  'm-b-6xl',
]

export type BaseTypes = {
  padding?: {
    paddingLeft?: typeof paddingsLeft[number]
    paddingRight?: typeof paddingsRight[number]
    paddingBottom?: typeof paddingsBottom[number]
    paddingTop?: typeof paddingsTop[number]
  }
  margin?: {
    marginLeft?: typeof marginLeft[number]
    marginRight?: typeof marginRight[number]
    marginBottom?: typeof marginBottom[number]
    marginTop?: typeof marginTop[number]
  }
}

export type unionPaddings =
  | typeof paddingsLeft[number]
  | typeof paddingsRight[number]
  | typeof paddingsBottom[number]
  | typeof paddingsTop[number]

export type unionMargin =
  | typeof marginLeft[number]
  | typeof marginRight[number]
  | typeof marginBottom[number]
  | typeof marginTop[number]
