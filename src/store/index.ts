import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formConstructorReducer from "./formElements";

const rootReducer = combineReducers({
    formConstructor: formConstructorReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']