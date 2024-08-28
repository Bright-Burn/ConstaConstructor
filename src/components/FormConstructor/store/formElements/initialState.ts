import uuid from 'react-uuid'

import type { IFormConstructor, ILayoutElement } from '../../coreTypes'
import { FormGroupsDictTypes } from '../../coreTypes'

import { instanceAdapter, viewAdapter, viewInfoAdapter } from './adapters'

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

export const initialState: IFormConstructor = {
  views: viewAdapter.getInitialState(),
  instances: instanceAdapter.getInitialState(),
  viewInfo: viewInfoAdapter.getInitialState(),
  instanceManager: {},
  selectedView: null,
  sameInstanceElementsIds: [],
  draggableElement: null,
  pages: initialPages,
  numberOfPages: initialNumberPage,
  selectedPageId: rootId,
  elementToCopyId: null,
  history: [
    {
      numberOfPages: initialNumberPage,
      pages: initialPages,
      selectedView: null,
    },
  ],
}
