import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formConstructorReducer } from './formElements'
import { enableMapSet } from 'immer';

enableMapSet()
const rootReducer = combineReducers({
  formConstructor: formConstructorReducer,
})



function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const customizedMiddleware = getDefaultMiddleware({
        serializableCheck: false
      })
      return customizedMiddleware
    },
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
