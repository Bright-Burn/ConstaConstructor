import { IBaseComponent } from '../../../store/baseComponentsItems'

export const choiceGroupMocks = ['Без сравнения', 'Целевая', 'Средняя']

export const barDataMocks = [
  { parameter: 'Бурение', number: 0 },
  { parameter: 'Бурение', number: 36.5, action: 'ПВ' },
  { parameter: 'Ожидание ВМР/Движка', number: 36.5 },
  { parameter: 'Ожидание ВМР/Движка', number: 2.3, action: 'Ожидания' },
  { parameter: 'ВМР/Движка', number: 38.8 },
  { parameter: 'ВМР/Движка', number: 4, action: 'ПВ' },
  { parameter: 'ВМР/Движка', number: 0.9, action: 'НПВ' },
  { parameter: 'Ожидание обустройства', number: 43.7 },
  { parameter: 'Ожидание обустройства', number: 2.9, action: 'Ожидания' },
  { parameter: 'Обустройство и обвязка скваж.', number: 46.6 },
  { parameter: 'Обустройство и обвязка скваж.', number: 4.8, action: 'ПВ' },
  { parameter: 'Обустройство и обвязка скваж.', number: 4, action: 'НПВ' },
  { parameter: 'Ожидание КРС (ПР к ГРП)', number: 55.4 },
  { parameter: 'Ожидание КРС (ПР к ГРП)', number: 1.2, action: 'Ожидания' },
  { parameter: 'КРС (ПР к ГРП)', number: 56.6 },
  { parameter: 'КРС (ПР к ГРП)', number: 6.7, action: 'ПВ' },
  { parameter: 'Ожидание ГРП', number: 63.3 },
  { parameter: 'Ожидание ГРП', number: 1.2, action: 'Ожидания' },
  { parameter: 'ГРП', number: 64.5 },
  { parameter: 'ГРП', number: 4.8, action: 'ПВ' },
  { parameter: 'ГРП', number: 4.1, action: 'НПВ' },
  { parameter: 'Ожидание ГНКТ', number: 73.4 },
  { parameter: 'Ожидание ГНКТ', number: 4.5, action: 'Ожидания' },
  { parameter: 'ГНКТ', number: 77.9 },
  { parameter: 'ГНКТ', number: 5.4, action: 'ПВ' },
  { parameter: 'Ожидание КРС (ЗР к ГРП)', number: 83.3 },
  { parameter: 'Ожидание КРС (ЗР к ГРП)', number: 6.5, action: 'Ожидания' },
  { parameter: 'КРС (ЗР к ГРП)', number: 89.8 },
  { parameter: 'КРС (ЗР к ГРП)', number: 7.1, action: 'ПВ' },
  { parameter: 'Ожидание ВНР', number: 96.9 },
  { parameter: 'Ожидание ВНР', number: 0.9, action: 'Ожидания' },
  { parameter: 'ВНР', number: 97.8 },
  { parameter: 'ВНР', number: 6, action: 'ПВ' },
  { parameter: 'ВНР', number: 1, action: 'НПВ' },
]

export const pieDataMocks = [
  { type: 'Вариант 1', value: 57 },
  { type: 'Вариант 2', value: 43 },
]

export const cardMock = {
  id: 'f49f44ce-27e4-458d-4fd5-faa976aba100',
  name: 'CardWithBarChart',
  description: 'CardWithBarChart',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516ab09f10',
      type: 'CardWithBarChart',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
