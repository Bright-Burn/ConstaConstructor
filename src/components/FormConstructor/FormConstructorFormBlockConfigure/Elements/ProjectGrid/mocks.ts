import { IBaseComponent } from '../../../store/baseComponentsItems'
import { ProjectTableView } from './types'

export const rows = [
  {
    id: '02d1feef-ce3c-4385-98e2-b2693595df96',
    name: 'Project 1',
    companyName: 'ООО "Газпромнефть-Ямал"',
    fieldName: 'Зимнее',
    createdBy: 'Автор 1',
    changedAt: 'Вчера',
    status: '',
  },
  {
    id: 'd074d6aa-e444-4aef-a019-cd772814d077',
    name: 'Project 2',
    companyName: 'ООО "Газпромнефть-Ямал"',
    fieldName: 'Зимнее',
    createdBy: 'Автор 1',
    changedAt: 'Вчера',
    status: '',
  },
  {
    id: '6c077921-ec1f-435d-8d5b-f0ca80fca580',
    name: 'Project 3',
    companyName: 'ООО "Газпромнефть-Ямал"',
    fieldName: 'Зимнее',
    createdBy: 'Автор 2',
    changedAt: '4 часа назад',
    status: 'В работе',
  },
] satisfies ProjectTableView[]

export const currentPage = 0
export const range = 10

export const gridMock = {
  id: 'f49f44ce-27e4-458d-4fd5-faa976aba011',
  name: 'Сетка проекторов',
  description: 'Сетка',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516ab09f33',
      type: 'ProjectGrid',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
