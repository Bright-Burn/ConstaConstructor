import { IBaseComponent } from '../../../store/baseComponentsItems'

export const headerGeologistId: string = 'af96797e-04cd-4c63-b0a7-16e630919b7e'
export const headerCognitiveGeologistMock = {
  id: headerGeologistId,
  name: 'Хедер геологист',
  description: 'Хедер',
  childrenElementList: [
    {
      id: '1b714252-a7cf-48e0-8c15-9889fe04928a',
      type: 'HeaderCognitiveGeologist',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
