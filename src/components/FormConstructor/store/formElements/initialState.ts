import uuid from 'react-uuid'
import {
  IFormElement,
  IGroupElement,
  FormGroupsTypes,
  IFormConstructor,
  ILayoutElement,
} from '../../coreTypes'
import { createEntityAdapter } from '@reduxjs/toolkit'
import { RootState } from '../setupStore'

export const rootId = uuid()
const initialLayoutId = uuid()

export const initialLayout: ILayoutElement = {
  id: initialLayoutId,
  type: FormGroupsTypes.Layout,
  parentId: 'null',
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

const initialPages = [{ id: rootId, name: 'Page1' }]
const initialNumberPage = 1

export const initialAllElementsTree = new Map<string, string[]>([[rootId, [initialLayoutId]]])

export const layuoutAdapter = createEntityAdapter<IFormElement | IGroupElement>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: layuout => layuout.id,
})

export const initialState: IFormConstructor = {
  allElements: layuoutAdapter.getInitialState(),
  selectedElement: null,
  selectedElementProps: null,
  draggableElement: null,
  pages: initialPages,
  numberOfPages: initialNumberPage,
  selectedPageId: rootId,

  history: [
    {
      allElementsTree: initialAllElementsTree,
      allElementsMap: initialElementsMap,
      numberOfPages: initialNumberPage,
      pages: initialPages,
      selectedElement: null,
      selectedElementProps: null,
    },
  ],
}
