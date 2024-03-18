import { createIcon } from '@consta/icons/Icon'

const BorderGrooveXs = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 1.5L1.5 1.5L1.5 2L1.5 9.79289L0.499998 10.7929L0.5 0.5L10.7929 0.500002L9.79289 1.5L2 1.5Z"
        stroke="#4D525B"
      />
      <path
        d="M10 10.5L10.5 10.5L10.5 10L10.5 2.20711L11.5 1.20711L11.5 11.5L1.20711 11.5L2.20711 10.5L10 10.5Z"
        stroke="#DEE4E8"
      />
      <path d="M2 1.5L1.5 1.5L1.5 1.5L9.79289 1.5L2 1.5Z" stroke="#DEE4E8" />
      <mask id="path-4-inside-1_663_60376" fill="white">
        <path d="M1 11L11 11L11 1L10 2L10 10L2 10L1 11Z" />
      </mask>
      <path
        d="M11 11L11 12L12 12L12 11L11 11ZM1 11L0.292893 10.2929L-1.41421 12L1 12L1 11ZM2 10L2 9L1.58579 9L1.29289 9.29289L2 10ZM10 10L10 11L11 11L11 10L10 10ZM10 2L9.29289 1.29289L9 1.58579L9 2L10 2ZM11 1L12 1L12 -1.41421L10.2929 0.292893L11 1ZM11 10L1 10L1 12L11 12L11 10ZM1.70711 11.7071L2.70711 10.7071L1.29289 9.29289L0.292893 10.2929L1.70711 11.7071ZM2 11L10 11L10 9L2 9L2 11ZM11 10L11 2L9 2L9 10L11 10ZM10.7071 2.70711L11.7071 1.70711L10.2929 0.292893L9.29289 1.29289L10.7071 2.70711ZM10 1L10 11L12 11L12 1L10 1Z"
        fill="#4D525B"
        mask="url(#path-4-inside-1_663_60376)"
      />
    </svg>
  )
}

export const BorderGroove = createIcon({
  l: BorderGrooveXs,
  m: BorderGrooveXs,
  s: BorderGrooveXs,
  xs: BorderGrooveXs,
  name: 'BorderGroove',
})
