import { createIcon } from '@consta/icons/Icon'

const BorderDashedXs = () => {
  return (
    <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.125 1H12.125" stroke="#002033" strokeWidth="2" strokeDasharray="4 1" />
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
