import { IFormConstructor } from '../types'

export const addNewPage = (state: IFormConstructor) => {
  state.pages = [
    ...state.pages,
    {
      name: `Page${state.numberOfPages + 1}`,
      isActive: false,
      parentId: `Page${state.numberOfPages + 1}`,
    },
  ]
  state.numberOfPages = state.numberOfPages + 1
}

