import { createIcon } from '@consta/icons/Icon'

const BorderDottXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 6H12"
        stroke="#002033"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeDasharray="2 0"
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
