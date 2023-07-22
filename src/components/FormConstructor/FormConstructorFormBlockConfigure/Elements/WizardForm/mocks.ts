import { IBaseComponent } from '../../../store/baseComponentsItems'
import { progressStepBarItem, selectItem } from './types'

export const wizardFormMockId = '9e176fa4-5b18-4722-94e6-c4dd5480f4cb'
export const wizardFormMock = {
  id: wizardFormMockId,
  name: 'Форма Wizard',
  description: 'Форма Wizard',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516abccccc',
      type: 'WizardForm',
      props: { className: '', baseProps: {} },
    },
  ],
} satisfies IBaseComponent

export const steps: progressStepBarItem[] = [
  {
    label: 'О компании',
    point: 1,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Данные о нарушении',
    point: 2,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Дополнительная информация',
    point: 3,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Члены комиссии',
    point: 4,
    status: 'normal',
    lineStatus: 'normal',
  },
  {
    label: 'Устранение нарушений',
    point: 5,
    status: 'normal',
    lineStatus: 'normal',
  },
]

export const companyItems: selectItem[] = [
  {
    label: 'ООО "Газпромнефть-Ямал"',
    id: 1,
  },
]

export const fieldItems: selectItem[] = [
  {
    label: 'Новопортовское',
    id: 1,
  },
]

export const manufactoryItems: selectItem[] = [
  {
    label: '166',
    id: 1,
  },
]

export const objectItems: selectItem[] = [
  {
    label: 'eb#field00061',
    id: 1,
  },
]

export const violationPlaceItems: selectItem[] = [
  {
    label: 'Трубопровод "Новый порт"',
    id: 1,
  },
]

export const wizardFromCompanyBlock = [
  {
    label: 'Компания',
    items: companyItems,
  },
  {
    label: 'Месторождение',
    items: fieldItems,
  },
  {
    label: 'Цех',
    items: manufactoryItems,
  },
  {
    label: 'Объект',
    items: objectItems,
  },
  {
    label: 'Место нарушения',
    items: violationPlaceItems,
  },
]
