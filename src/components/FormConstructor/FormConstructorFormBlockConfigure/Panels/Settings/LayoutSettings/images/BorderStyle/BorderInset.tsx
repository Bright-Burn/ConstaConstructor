import { createIcon } from '@consta/icons/Icon'

const BorderInsetXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 1.5H1.5V2L1.5 9.79289L0.5 10.7929L0.5 0.5L10.7929 0.5L9.79289 1.5L2 1.5Z"
        stroke="#4D525B"
      />
      <path
        d="M10 10.5L10.5 10.5L10.5 10L10.5 2.20711L11.5 1.20711L11.5 11.5L1.20711 11.5L2.20711 10.5L10 10.5Z"
        stroke="#DEE4E8"
      />
    </svg>
  )
}

export const BorderInset = createIcon({
  l: BorderInsetXs,
  m: BorderInsetXs,
  s: BorderInsetXs,
  xs: BorderInsetXs,
  name: 'BorderInset',
})
