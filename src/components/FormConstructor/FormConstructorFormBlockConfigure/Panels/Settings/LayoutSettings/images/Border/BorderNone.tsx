import { createIcon } from '@consta/icons/Icon'

const BorderNoneXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9L1 11H2L2 9H1Z" fill="black" />
      <path d="M8 10V11H6V10L8 10Z" fill="black" />
      <path d="M5 11V10L3 10V11H5Z" fill="black" />
      <path d="M11 10V11H9V10L11 10Z" fill="black" />
      <path d="M11 3H10V1L11 1V3Z" fill="black" />
      <path d="M10 4V6H11V4H10Z" fill="black" />
      <path d="M10 9V7H11V9H10Z" fill="black" />
      <path d="M1 6L1 8H2L2 6H1Z" fill="black" />
      <path d="M1 5L1 3H2V5H1Z" fill="black" />
      <path d="M1 1L1 2L3 2V1L1 1Z" fill="black" />
      <path d="M4 2V1L6 1V2L4 2Z" fill="black" />
      <path d="M7 1V2H9V1L7 1Z" fill="black" />
    </svg>
  )
}

export const BorderNone = createIcon({
  l: BorderNoneXs,
  m: BorderNoneXs,
  s: BorderNoneXs,
  xs: BorderNoneXs,
  name: 'BorderNone',
})
