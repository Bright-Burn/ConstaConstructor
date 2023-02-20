import { combineReducers, configureStore } from '@reduxjs/toolkit'
import formConstructorReducer from './formElements'

const rootReducer = combineReducers({
  formConstructor: formConstructorReducer,
})

function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
