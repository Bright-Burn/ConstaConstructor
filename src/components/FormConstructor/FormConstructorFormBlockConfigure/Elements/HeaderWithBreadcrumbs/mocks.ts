import { IBaseComponent } from '../../../store/baseComponentsItems'

export const pages = [
  {
    label: 'ООО "Газпромнефть-Ямал"',
    href: '#',
  },
  {
    label: '8.1 куст',
    href: '#',
  },
  {
    label: 'Скважина 8006б основной ствол',
    href: '#',
  },
]

export const headerMock = {
  id: 'f49f44ce-27e4-458d-4fd5-faa976aba015',
  name: 'Хедер с хлебными крошками',
  description: 'Хедер',
  childrenElementList: [
    {
      id: '1657c7e0-9f56-a296-526e-af516ab09f33',
      type: 'HeaderWithBreadcrumbs',
      props: { className: '', baseProps: {} },
    },
  ],
  childParentMap: [],
} satisfies IBaseComponent
