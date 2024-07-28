import uuid from 'react-uuid'
import { createEntityAdapter } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement, ILayoutElement } from '../../coreTypes'
import { FormGroupsDictTypes } from '../../coreTypes'

import { formInstanceAdapter } from './formInstanseAdapter'

export const rootId = uuid()
const initialLayoutId = uuid()

export const initialLayout: ILayoutElement = {
  id: initialLayoutId,
  type: FormGroupsDictTypes.Layout,
  parentId: 'null',
  isOuter: false,
  order: 1,
  props: {
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
        borderSide: 'borderAll',
        borderStyle: 'dotted',
        borderWidth: 'thin',
      },
      className: '',
      baseProps: {},
    },
    type: 'Layout',
  },
}

const initialPages = [{ id: rootId, name: 'Страница 1' }]
const initialNumberPage = 1

export const layuoutAdapter = createEntityAdapter<IFormElement | IGroupElement>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: layout => layout.id,
})

export const initialState: IFormConstructor = {
  allElements: layuoutAdapter.getInitialState(),
  elementInstances: formInstanceAdapter.getInitialState(),
  instanceManager: {},
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
