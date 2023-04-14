import { IBaseComponent } from '../../../store/baseComponentsItems'

export const pieChart1Data = [
  { type: '1', value: 0.33 },
  { type: '2', value: 0.24 },
]

export const pieChart2Data = [
  { type: '1', value: 11 },
  { type: '2', value: 51 },
]

export const pieChart3Data = [
  { type: '1', value: 7 },
  { type: '2', value: 2 },
  { type: '3', value: 3 },
]

export const pieChart4Data = [
  { type: '1', value: 1 },
  { type: '2', value: 11 },
]

export const barChart1Data = [
  {
    name: 'ПВ',
    group: 'ЛКС',
    value: 18.9,
  },
  {
    name: 'Ожидания',
    group: 'ЛКС',
    value: 28.8,
  },
  {
    name: 'ПВ',
    group: 'Среднее',
    value: 28.8,
  },
  {
    name: 'Ожидания',
    group: 'Среднее',
    value: 28.8,
  },
  {
    name: 'НПВ',
    group: 'Среднее',
    value: 28.8,
  },
  {
    name: 'ПВ',
    group: 'Факт',
    value: 18.9,
  },
  {
    name: 'Ожидания',
    group: 'Факт',
    value: 18.9,
  },
  {
    name: 'НПВ',
    group: 'Факт',
    value: 18.9,
  },
]

export const barChart2Data = [
  {
    group: 'Неисправность П/А',
    name: 'Метео',
    value: 18.9,
  },
  {
    group: 'Ожидание оборудования',
    name: 'Подрядчик',
    value: 28.8,
  },
  {
    group: 'Отсутствие дороги',
    name: 'Заказчик',
    value: 28.8,
  },
  {
    group: 'Ожидание спецтехники',
    name: 'Метео',
    value: 28.8,
  },
  {
    group: 'Прочие',
    name: 'Заказчик',
    value: 28.8,
  },
  {
    group: 'Ожидание КРС (ПР к ГРП)',
    name: 'Подрядчик',
    value: 18.9,
  },
  {
    group: 'Неисправность П/А',
    name: 'Подрядчик',
    value: 18.9,
  },
  {
    group: 'Прочие',
    name: 'Подрядчик',
    value: 18.9,
  },
]

export const barChart3Data = [
  {
    group: 'Бурение',
    name: 'Факт',
    value: 42,
  },
  {
    group: 'ВМР/Движка',
    name: 'Факт',
    value: 5,
  },
  {
    group: 'ВМР/Движка',
    name: 'Превышение плана',
    value: 4,
  },
  {
    group: 'Обустройство',
    name: 'Факт',
    value: 9,
  },
  {
    group: 'Обустройство',
    name: 'Превышение плана',
    value: 2,
  },
  {
    group: 'КРС (ПР к ГРП)',
    name: 'Факт',
    value: 11,
  },
  {
    group: 'ГРП',
    name: 'Факт',
    value: 10,
  },
  {
    group: 'ГРП',
    name: 'Превышение плана',
    value: 10,
  },
  {
    group: 'ГНКТ',
    name: 'Факт',
    value: 15,
  },
  {
    group: 'ВНР ',
    name: 'Факт',
    value: 3,
  },
  {
    group: 'Прочие',
    name: 'Факт',
    value: 18.9,
  },
]

export const selectIdleStepData = [
  {
    label: 'Все этапы',
    id: 1,
  },
]

export const selectIdleTypeData = [
  {
    label: 'Ожидания',
    id: 1,
  },
]

export const dashboardMockId = 'c7d1d7bd-f13e-28e9-67a8-2699f5de1feb'
export const dashboardMock: IBaseComponent = {
  id: dashboardMockId,
  name: 'Дашборд',
  description: '',
  childrenElementList: [
    {
      id: 'dd228573-1f12-82ed-f48a-fb34a7ff99ea',
      type: 'Dashboard',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
}
