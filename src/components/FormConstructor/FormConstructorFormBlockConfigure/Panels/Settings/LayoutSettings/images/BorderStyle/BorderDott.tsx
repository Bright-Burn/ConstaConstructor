import { createIcon } from '@consta/icons/Icon'

const BorderDottXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0 6H12'
        stroke='#002033'
        stroke-width='2'
        stroke-linejoin='round'
        stroke-dasharray='2 0'
      />
    </svg>
  )
}

export const BorderDott = createIcon({
  l: BorderDottXs,
  m: BorderDottXs,
  s: BorderDottXs,
  xs: BorderDottXs,
  name: 'BorderDott',
})
