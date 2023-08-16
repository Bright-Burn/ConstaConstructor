import { createIcon } from '@consta/icons/Icon'

const BorderDashedXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path d='M0 6H12' stroke='#002033' stroke-width='2' stroke-dasharray='4 1' />
    </svg>
  )
}

export const BorderDashed = createIcon({
  l: BorderDashedXs,
  m: BorderDashedXs,
  s: BorderDashedXs,
  xs: BorderDashedXs,
  name: 'BorderDashed',
})
