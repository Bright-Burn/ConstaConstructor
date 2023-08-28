import { createIcon } from '@consta/icons/Icon'

const BorderSolidXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 6H12' stroke='#002033' stroke-width='2' />
    </svg>
  )
}

export const BorderSolid = createIcon({
  l: BorderSolidXs,
  m: BorderSolidXs,
  s: BorderSolidXs,
  xs: BorderSolidXs,
  name: 'BorderSolid',
})
