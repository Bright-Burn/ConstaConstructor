import { createIcon } from '@consta/icons/Icon'

const AlignPositionNormalXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 11L9 11V10L11 10V11Z" fill="black" />
      <path d="M3 3H5V9H3V3Z" fill="black" />
      <path d="M6 3H8V9H6V3Z" fill="black" />
      <path d="M2 11H1V10H2V11Z" fill="black" />
      <path d="M11 2H10V1H11V2Z" fill="black" />
      <path d="M3 2H1V1H3V2Z" fill="black" />
      <path d="M6 2H4V1H6V2Z" fill="black" />
      <path d="M9 2H7V1H9V2Z" fill="black" />
      <path d="M8 11L6 11V10L8 10V11Z" fill="black" />
      <path d="M5 11L3 11V10L5 10V11Z" fill="black" />
    </svg>
  )
}

export const AlignPositionNormal = createIcon({
  l: AlignPositionNormalXs,
  m: AlignPositionNormalXs,
  s: AlignPositionNormalXs,
  xs: AlignPositionNormalXs,
  name: 'AlignPositionNormal',
})
