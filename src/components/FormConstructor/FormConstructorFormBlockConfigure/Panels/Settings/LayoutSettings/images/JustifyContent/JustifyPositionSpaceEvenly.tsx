import { createIcon } from '@consta/icons/Icon'

const JustifyPositionSpaceEvenlyXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4H5V8H3V4Z" fill="black" />
      <path d="M7 4H9V8H7V4Z" fill="black" />
      <path d="M1 10L1 11H2L2 10H1Z" fill="black" />
      <path d="M8 10V11H6V10L8 10Z" fill="black" />
      <path d="M5 11V10L3 10V11H5Z" fill="black" />
      <path d="M11 10V11H9V10L11 10Z" fill="black" />
      <path d="M11 2H10V1L11 1V2Z" fill="black" />
      <path d="M1 1L1 2L3 2V1L1 1Z" fill="black" />
      <path d="M4 2V1L6 1V2L4 2Z" fill="black" />
      <path d="M7 1V2H9V1L7 1Z" fill="black" />
    </svg>
  )
}

export const JustifyPositionSpaceEvenly = createIcon({
  l: JustifyPositionSpaceEvenlyXs,
  m: JustifyPositionSpaceEvenlyXs,
  s: JustifyPositionSpaceEvenlyXs,
  xs: JustifyPositionSpaceEvenlyXs,
  name: 'JustifyPositionSpaceEvenly',
})
