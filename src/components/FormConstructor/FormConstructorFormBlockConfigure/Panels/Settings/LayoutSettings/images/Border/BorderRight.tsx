import { createIcon } from '@consta/icons/Icon'

const BorderRightXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H3V2H1V1Z" fill="black" />
      <path d="M1 5H2V3H1V5Z" fill="black" />
      <path d="M2 8H1V6H2V8Z" fill="black" />
      <path d="M3 11V10H5V11H3Z" fill="black" />
      <path d="M6 10V11H8V10H6Z" fill="black" />
      <path d="M1 9H2V11H1V9Z" fill="black" />
      <path d="M6 1H4V2H6V1Z" fill="black" />
      <path d="M7 1H8V2H7V1Z" fill="black" />
      <path d="M11 1H9V11H11V1Z" fill="black" />
    </svg>
  )
}

export const BorderRight = createIcon({
  l: BorderRightXs,
  m: BorderRightXs,
  s: BorderRightXs,
  xs: BorderRightXs,
  name: 'BorderRight',
})
