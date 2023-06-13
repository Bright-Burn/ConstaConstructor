import { IBaseComponent } from '../../../store/baseComponentsItems';
import uuid from 'react-uuid';

export const CustomTextMockId = uuid();

export const CustomTextMock = {
  id: CustomTextMockId,
  name: 'Текстовый блок',
  description: 'Текстовый блок',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'CustomText',
      props: {
        baseProps: {},
        className: '',
      },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent;

