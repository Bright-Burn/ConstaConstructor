import { IBaseComponent } from '../../../store/baseComponentsItems';
import uuid from 'react-uuid';
import { PrototypeProps } from '../../Panels/Settings/PrototypeSettings/types';

export const CustomTextMockId = uuid();

export const PrototypeRectMock = {
  id: CustomTextMockId,
  name: 'Прямоугольник',
  description: 'Прямоугольник',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'PrototypeRectElement',
      props: new PrototypeProps({
        baseProps: {},
        className: '',
        height: 20,
        left: 0,
        top: 0,
        width: 120,
        zIndex: 1,
      })
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent;
