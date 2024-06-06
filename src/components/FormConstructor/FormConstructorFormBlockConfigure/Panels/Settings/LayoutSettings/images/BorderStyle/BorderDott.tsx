import { createIcon } from '@consta/icons/Icon'

const BorderDottXs = () => {
  return (
    <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.875 1H12.875"
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
