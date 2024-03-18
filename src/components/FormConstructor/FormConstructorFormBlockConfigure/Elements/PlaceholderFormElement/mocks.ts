import uuid from 'react-uuid'

import type { IBaseComponent } from '../../../store'

export const placeholderMockId = uuid()

export const placeholderMock: IBaseComponent = {
  id: placeholderMockId,
  name: 'Плейсхолдер',
  description: '',
  childrenElementList: [
    {
      id: '79e26ce6-d61d-24f1-f76c-925009ae12c1',
      type: 'Placeholder',
      props: { className: '', baseProps: {} },
    },
  ],
} satisfies IBaseComponent
