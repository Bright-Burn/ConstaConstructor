import { IBaseComponent } from '../../../store/baseComponentsItems'

export interface wellType {
  well: string
  status: string
  state: string
  calculationType: number
  date: string
  oilField: string
}

export const wellInfo = [
  {
    well: '1618',
    status: 'Изменены ограничения',
    state: '',
    calculationType: 2008,
    date: '24/08/2008',
    oilField: 'Оренбургские',
  },
  {
    well: '1441',
    status: 'Изменены ограничения',
    state: '',
    calculationType: 2012,
    date: '12/08/2012',
    oilField: 'Оренбургские',
  },
  {
    well: '1331',
    status: 'Отключена(Ошибки)',
    state: '',
    calculationType: 2004,
    date: '29/08/2004',
    oilField: 'Оренбургские',
  },
]

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
