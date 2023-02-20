import { IFormConstructor, IFormElementHolder } from './types'
import { createSlice, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'

const initialState: IFormConstructor = {
  allElementsMap: new Map<string, IFormElementHolder>(),
  selectedFormElement: '',
}

const createFormConstructorSlice = <Reducers extends SliceCaseReducers<IFormConstructor>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IFormConstructor
  reducers: ValidateSliceCaseReducers<IFormConstructor, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const FormConstructorSlice = createFormConstructorSlice({
  name: 'formConstructor',
  initialState,
  reducers: {},
})
