import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formConstructorReducer } from './formElements'
import { enableMapSet } from 'immer'
import { baseComponentsReducer } from './baseComponentsItems'
import { ViewrSlice } from './Viewer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

enableMapSet()
const rootReducer = combineReducers({
  formConstructor: formConstructorReducer,
  baseComponents: baseComponentsReducer,
  Viewer: ViewrSlice.reducer,
})

function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      const customizedMiddleware = getDefaultMiddleware({
        /// По хорошему надо от этого избавиться, но тогда не сможем использовать Map в store
        serializableCheck: false,
      })
      return customizedMiddleware
    },
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
