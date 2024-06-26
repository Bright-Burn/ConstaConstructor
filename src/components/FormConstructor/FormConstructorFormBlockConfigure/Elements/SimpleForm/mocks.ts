import type { IBaseComponent } from '../../../store'

export const simpleFormMockId = 'f49f44ce-27e4-458d-4fd5-faa976accccc'
export const simpleFormMock = {
  id: simpleFormMockId,
  name: 'Простая форма',
  description: 'Простая форма',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516abccccc',
      order: 1,
      type: 'SimpleForm',
      props: { props: { className: '', baseProps: {} }, type: 'SimpleForm' },
    },
  ],
} satisfies IBaseComponent
