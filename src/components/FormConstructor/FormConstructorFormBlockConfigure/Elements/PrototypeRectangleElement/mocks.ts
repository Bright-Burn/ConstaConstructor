import uuid from 'react-uuid'

import { PrototypeProps } from '../../../coreTypes'
import type { IBaseComponent } from '../../../store'

export const rectangleMockId = uuid()

export const PrototypeRectangleMock = {
  id: rectangleMockId,
  name: 'Прямоугольник',
  description: 'Прямоугольник',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'PrototypeRectangleElement',
      order: 1,
      props: {
        props: new PrototypeProps({
          baseProps: {},
          className: '',
          height: 20,
          left: 0,
          top: 0,
          width: 120,
          zIndex: 1,
        }),
        type: 'PrototypeRectangleElement',
      },
    },
  ],
} satisfies IBaseComponent
