import { IBaseComponent } from '../../../store/baseComponentsItems';
import uuid from 'react-uuid';
import { PrototypeTextProps } from './types';

export const CustomTextMockId = uuid();

export const PrototypeTextMock = {
  id: CustomTextMockId,
  name: 'Текстовый блок',
  description: 'Текстовый блок',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'PrototypeTextElement',
      props: new PrototypeTextProps({
        baseProps: {},
        className: '',
        height: 20,
        left: 0,
        top: 0,
        width: 120,
        zIndex: 1,
        text: 'Пример текста',
      })
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent;
