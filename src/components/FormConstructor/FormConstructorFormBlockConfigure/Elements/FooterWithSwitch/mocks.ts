import type { IBaseComponent } from '../../../store'

export const footerWithSwitchMockId = '061a1f81-47c2-4cf8-9c0b-1997ade03298'
export const footerWithSwitchMock = {
  id: footerWithSwitchMockId,
  name: 'Футер',
  description: 'Футер',
  childrenElementList: [
    {
      id: '1b714252-a7cf-48e0-8c15-9889fe04928b',
      type: 'FooterWithSwitch',
      props: { className: '', baseProps: {} },
    },
  ],
} satisfies IBaseComponent
