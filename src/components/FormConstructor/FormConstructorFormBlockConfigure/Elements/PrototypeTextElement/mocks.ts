import uuid from 'react-uuid'

import { PrototypeProps } from '../../../coreTypes'
import type { IBaseComponent } from '../../../store'

export const textMockId = uuid()

export const PrototypeTextMock = {
  id: textMockId,
  name: 'Текстовый блок',
  description: 'Текстовый блок',
  childrenElementList: [
    {
      id: 'd333d332-d8c2-4280-a8cd-e90b2faa860e',
      type: 'PrototypeTextElement',
      props: new PrototypeProps({
        baseProps: {},
        className: '',
        height: 20,
        left: 0,
        top: 0,
        width: 120,
        zIndex: 1,
        text: 'Пример текста',
      }),
    },
  ],
} satisfies IBaseComponent
