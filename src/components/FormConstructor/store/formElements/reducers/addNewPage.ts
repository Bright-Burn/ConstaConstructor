import uuid from 'react-uuid'
import {
  FormGroupsTypes,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  ILayoutElement,
} from '../types'

export const addNewPage = (state: IFormConstructor) => {
  const pageLayout: ILayoutElement = {
    id: uuid(),
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
  const pageId = `Page${state.numberOfPages + 1}`

  const newTreeMap = new Map<string, string[]>(state.allElementsTree)
  const newAllElementsMap = new Map<string, IGroupElement | IFormElement>(state.allElementsMap)

  newAllElementsMap.set(pageLayout.id, pageLayout)
  newTreeMap.set(pageId, [pageLayout.id])

  state.pages = [
    ...state.pages,
    {
      id: pageId,
      name: `Page${state.numberOfPages + 1}`,
    },
  ]
  state.numberOfPages = state.numberOfPages + 1
  state.allElementsMap = newAllElementsMap
  state.allElementsTree = newTreeMap
}

