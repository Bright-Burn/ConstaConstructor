import type { IBaseComponent } from '../../../store'

export const TableMockId = 'f54f44ce-27e4-4f8d-4fd5-faa976accccc'
export const TableMock = {
  id: TableMockId,
  name: 'Таблица',
  description: 'Таблица',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516abccccc5',
      type: 'Table',
      props: {
        props: { className: '', baseProps: {}, column: 3, row: 3 },
        type: 'Table',
      },
    },
  ],
} satisfies IBaseComponent
