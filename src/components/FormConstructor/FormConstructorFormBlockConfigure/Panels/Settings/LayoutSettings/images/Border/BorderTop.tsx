import { createIcon } from '@consta/icons/Icon'

const BorderTopXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1 11L1 9H2L2 11H1Z' fill='black' />
      <path d='M5 11V10H3V11H5Z' fill='black' />
      <path d='M11 10V11H9V10L11 10Z' fill='black' />
      <path d='M8 11V10L6 10V11H8Z' fill='black' />
      <path d='M10 4V6H11V4H10Z' fill='black' />
      <path d='M10 9V7H11V9H10Z' fill='black' />
      <path d='M1 6L1 8H2L2 6H1Z' fill='black' />
      <path d='M1 5L1 4H2V5H1Z' fill='black' />
      <path d='M1 1L1 3L11 3V1L1 1Z' fill='black' />
    </svg>
  )
}

export const BorderTop = createIcon({
  l: BorderTopXs,
  m: BorderTopXs,
  s: BorderTopXs,
  xs: BorderTopXs,
  name: 'BorderTop',
})
