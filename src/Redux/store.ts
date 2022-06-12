import {combineReducers,createStore} from 'redux'
import {counterReducer} from "./counter-reduser";

const rootReducer = combineReducers ({
    counterState: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)