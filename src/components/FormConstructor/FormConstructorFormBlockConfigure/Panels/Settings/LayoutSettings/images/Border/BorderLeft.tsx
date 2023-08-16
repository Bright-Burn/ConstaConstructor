import { createIcon } from '@consta/icons/Icon'

const BorderLeftXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11 11H9V10H11V11Z' fill='black' />
      <path d='M11 4L10 4V6H11L11 4Z' fill='black' />
      <path d='M10 7H11V9H10V7Z' fill='black' />
      <path d='M11 1L10 1V3L11 3V1Z' fill='black' />
      <path d='M4 2L6 2V1L4 1L4 2Z' fill='black' />
      <path d='M9 2L7 2V1L9 1V2Z' fill='black' />
      <path d='M6 11L8 11V10H6V11Z' fill='black' />
      <path d='M5 11H4V10H5V11Z' fill='black' />
      <path d='M1 11H3L3 1L1 1L1 11Z' fill='black' />
    </svg>
  )
}

export const BorderLeft = createIcon({
  l: BorderLeftXs,
  m: BorderLeftXs,
  s: BorderLeftXs,
  xs: BorderLeftXs,
  name: 'BorderLeft',
})
