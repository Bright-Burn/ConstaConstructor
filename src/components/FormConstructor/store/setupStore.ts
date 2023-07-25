import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formConstructorReducer } from './formElements'
import { baseComponentsReducer } from './baseComponentsItems'
import { ViewerSlice } from './Viewer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  formConstructor: formConstructorReducer,
  baseComponents: baseComponentsReducer,
  Viewer: ViewerSlice.reducer,
})

function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
