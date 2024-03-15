import { createIcon } from '@consta/icons/Icon'

const BorderDoubleXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5H12M0 7H12" stroke="#002033" />
    </svg>
  )
}

export const BorderDouble = createIcon({
  l: BorderDoubleXs,
  m: BorderDoubleXs,
  s: BorderDoubleXs,
  xs: BorderDoubleXs,
  name: 'BorderDouble',
})
