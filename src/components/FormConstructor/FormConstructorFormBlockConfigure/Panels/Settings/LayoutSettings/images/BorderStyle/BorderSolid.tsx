import { createIcon } from '@consta/icons/Icon'

const BorderSolidXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6H12" stroke="#002033" strokeWidth="2" />
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
