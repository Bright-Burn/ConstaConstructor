import { IBaseComponent } from '../../../store/baseComponentsItems'

export const FormWithTwoColumnsMockId = 'f49f44ce-27e4-4f8d-4fd5-faa976accccc'
export const FormWithTwoColumnsMock = {
  id: FormWithTwoColumnsMockId,
  name: 'Данные о месте нарушения',
  description: 'Данные о месте нарушения',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516abccccc5',
      type: 'FormWithTwoColumns',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
