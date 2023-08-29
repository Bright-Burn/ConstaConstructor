import uuid from 'react-uuid'
import {
  IFormElement,
  IGroupElement,
  FormGroupsDictTypes,
  IFormConstructor,
  ILayoutElement,
} from '../../coreTypes'
import { createEntityAdapter } from '@reduxjs/toolkit'

export const rootId = uuid()
const initialLayoutId = uuid()

export const initialLayout: ILayoutElement = {
  id: initialLayoutId,
  type: FormGroupsDictTypes.Layout,
  parentId: 'null',
  isOuter: false,
  props: {
    props: {
      constaProps: {
        flex: 1,
        direction: { name: 'row' },
        horizontalAlign: 'left',
        verticalAlign: 'top',
      },
      styles: {
        alignItems: { name: 'normal' },
        justifyContent: { name: 'start' },
        borderSide: { name: ' ' },
        borderStyle: { name: 'dotted' },
        borderWidth: 'thin',
      },
      className: '',
      baseProps: {},
    },
    type: 'Layout',
  },
}

const initialPages = [{ id: rootId, name: 'Page1' }]
const initialNumberPage = 1

export const layuoutAdapter = createEntityAdapter<IFormElement | IGroupElement>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: layout => layout.id,
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
      numberOfPages: initialNumberPage,
      pages: initialPages,
      selectedElement: null,
      selectedElementProps: null,
    },
  ],
}
