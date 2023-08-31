import { createIcon } from '@consta/icons/Icon'

const BorderAllXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3L3 9H9V3L3 3ZM1 11H11V1L1 1L1 11Z'
        fill='black'
      />
    </svg>
  )
}

export const BorderAll = createIcon({
  l: BorderAllXs,
  m: BorderAllXs,
  s: BorderAllXs,
  xs: BorderAllXs,
  name: 'BorderAll',
})
