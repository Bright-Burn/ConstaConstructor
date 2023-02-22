import { formConstructorSlice } from './slices'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'

const formConstructorReducer = formConstructorSlice.reducer

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { formConstructorReducer, formConstructorSlice, useAppSelector, useAppDispatch }
