import { IPages } from './types'
import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { changePages } from './payload'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../setupStore'
const InitialState: IPages = {
  pages: [{ name: 'Page1', isActive: true, parentId: 'root' }],
  numberOfPages: 1,
}

const createPagesSlice = <Reducers extends SliceCaseReducers<IPages>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IPages
  reducers: ValidateSliceCaseReducers<IPages, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const pagesSlice = createPagesSlice({
  name: 'pagesSlice',
  initialState: InitialState,
  reducers: {
    addNewPage: state => {
      state.pages = [
        ...state.pages,
        {
          name: `Page${state.numberOfPages + 1}`,
          isActive: false,
          parentId: `Page${state.numberOfPages + 1}`,
        },
      ]
      state.numberOfPages = state.numberOfPages + 1
    },
    changeActivePage: (state, action: PayloadAction<changePages>) => {
      state.pages = state.pages.map((page, i) => {
        return {
          name: page.name,
          isActive: i === action.payload.index,
          parentId: page.parentId,
        }
      })
    },
    closePage: (state, action: PayloadAction<changePages>) => {
      state.pages = state.pages
        .filter((page, i) => i !== action.payload.index)
        .map((page, i) => {
          return {
            name: page.name,
            isActive: i === action.payload.index,
            parentId: page.parentId,
          }
        })
    },
  },
})

export const pagesReducer = pagesSlice.reducer

export const usePagesDispatch = () => useDispatch<AppDispatch>()
export const usePagesSelector: TypedUseSelectorHook<RootState> = useSelector
