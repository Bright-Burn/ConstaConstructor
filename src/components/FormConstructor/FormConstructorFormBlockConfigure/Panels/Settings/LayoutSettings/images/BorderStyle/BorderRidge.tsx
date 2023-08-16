import { createIcon } from '@consta/icons/Icon'

const BorderRidgeXs = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M10 10.5L10.5 10.5L10.5 10L10.5 2.20711L11.5 1.20711L11.5 11.5L1.20711 11.5L2.20711 10.5L10 10.5Z'
        stroke='#4D525B'
      />
      <path d='M2 1.5H1.5V2V9.79289L0.5 10.7929V0.5H10.7929L9.79289 1.5H2Z' stroke='#DEE4E8' />
      <path d='M10 10.5L10.5 10.5L10.5 10.5L2.20711 10.5L10 10.5Z' stroke='#DEE4E8' />
      <mask id='path-4-inside-1_663_57903' fill='white'>
        <path d='M11 1H1V11L2 10V2H10L11 1Z' />
      </mask>
      <path
        d='M1 1V0H0V1H1ZM11 1L11.7071 1.70711L13.4142 0H11V1ZM10 2V3H10.4142L10.7071 2.70711L10 2ZM2 2V1H1V2H2ZM2 10L2.70711 10.7071L3 10.4142V10H2ZM1 11H0V13.4142L1.70711 11.7071L1 11ZM1 2H11V0H1V2ZM10.2929 0.292893L9.29289 1.29289L10.7071 2.70711L11.7071 1.70711L10.2929 0.292893ZM10 1H2V3H10V1ZM1 2V10H3V2H1ZM1.29289 9.29289L0.292893 10.2929L1.70711 11.7071L2.70711 10.7071L1.29289 9.29289ZM2 11V1H0V11H2Z'
        fill='#4D525B'
        mask='url(#path-4-inside-1_663_57903)'
      />
    </svg>
  )
}

export const BorderRidge = createIcon({
  l: BorderRidgeXs,
  m: BorderRidgeXs,
  s: BorderRidgeXs,
  xs: BorderRidgeXs,
  name: 'BorderRidge',
})
