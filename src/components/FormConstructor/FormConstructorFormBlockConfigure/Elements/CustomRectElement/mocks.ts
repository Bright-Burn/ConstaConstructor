import { IBaseComponent } from '../../../store/baseComponentsItems'
import { IRectParams } from './types';

export const CustomRectMockId = 'ca077e3a-0991-4043-a629-8ccae6eb3e5c'
const defaultBaseProps: IRectParams = {
  width: '40px',
  height: '40px',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
}
export const CustomRectMock = {
  id: CustomRectMockId,
  name: 'Прямоугольник',
  description: 'Прямоугольник',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'CustomRect',
      props: { className: '', baseProps: {}, ...defaultBaseProps },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent

