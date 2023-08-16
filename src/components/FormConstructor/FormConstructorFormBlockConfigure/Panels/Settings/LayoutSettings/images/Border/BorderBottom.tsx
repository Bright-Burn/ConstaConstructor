import { createIcon } from '@consta/icons/Icon'

const BorderBottomXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11 1L11 3H10L10 1L11 1Z' fill='black' />
      <path d='M4 1V2L6 2V1L4 1Z' fill='black' />
      <path d='M7 2V1L9 1L9 2L7 2Z' fill='black' />
      <path d='M1 1L1 2L3 2V1L1 1Z' fill='black' />
      <path d='M2 8L2 6H1L1 8H2Z' fill='black' />
      <path d='M2 3V5H1L1 3H2Z' fill='black' />
      <path d='M11 6V4H10L10 6H11Z' fill='black' />
      <path d='M11 7V8H10L10 7H11Z' fill='black' />
      <path d='M11 11V9H1L1 11H11Z' fill='black' />
    </svg>
  )
}

export const BorderBottom = createIcon({
  l: BorderBottomXs,
  m: BorderBottomXs,
  s: BorderBottomXs,
  xs: BorderBottomXs,
  name: 'BorderBottom',
})
