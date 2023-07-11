import uuid from 'react-uuid'
import {
  IFormElement,
  IGroupElement,
  FormGroupsTypes,
  IFormConstructor,
  ILayoutElement,
} from './types'

export const rootId = uuid()
const initialLayoutId = uuid()

export const initialLayout: ILayoutElement = {
  id: initialLayoutId,
  type: FormGroupsTypes.Layout,
  isOuter: false,
  props: {
    constaProps: {
      flex: 1,
      direction: 'row',
      horizontalAlign: 'left',
      verticalAlign: 'top',
    },
    styles: {
      alignItems: 'normal',
      justifyContent: 'start',
    },
    className: '',
    baseProps: {},
  },
}

const initialElementsMap = new Map<string, IFormElement | IGroupElement>([
  [initialLayoutId, initialLayout],
])

export const initialAllElementsTree = new Map<string, string[]>([[rootId, [initialLayoutId]]])

export const initialState: IFormConstructor = {
  allElementsTree: initialAllElementsTree,
  allElementsMap: initialElementsMap,
  selectedElement: null,
  selectedElementProps: null,
  isGridVisible: true,
  draggableElement: null,
  componentsStructurePanelState: true,
  settingsPanelState: true,
  pages: [{ id: rootId, name: 'Page1' }],
  numberOfPages: 1,
  selectedPageId: rootId,
}

