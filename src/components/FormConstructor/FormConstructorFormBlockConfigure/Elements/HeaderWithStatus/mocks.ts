import { IBaseComponent } from '../../../store/baseComponentsItems'

export const headerWithStatusMockId = 'c7e739e6-f1c0-4456-b438-2d2aa3ca4008'
export const headerWithStatusMock = {
  id: headerWithStatusMockId,
  name: 'Хедер c статусом',
  description: 'Хедер2',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516ab09f34',
      type: 'HeaderWithStatus',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
