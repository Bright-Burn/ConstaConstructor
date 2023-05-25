import { IBaseComponent } from '../../../store/baseComponentsItems'

export const ExpertiseFormMockId = 'f49f44ce-27e4-458d-4fd5-faс976accccc'
export const ExpertiseFormMock = {
  id: ExpertiseFormMockId,
  name: 'Экспедиция',
  description: 'Экспедиция',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516abccccc',
      type: 'ExpertiseForm',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
