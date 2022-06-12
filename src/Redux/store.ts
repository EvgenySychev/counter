import {combineReducers,createStore} from 'redux'
import {counterReducer} from "./counter-reduser";

const rootReducer = combineReducers ({
    counterState: counterReducer
})

let preloaderState
const persistedTodoString = localStorage.getItem('app-state')
if (persistedTodoString) {
    preloaderState = JSON.parse(persistedTodoString)
}

export const store = createStore(rootReducer,preloaderState)

store.subscribe(()=> {localStorage.setItem('app-state', JSON.stringify(store.getState()))})

export type AppStateType = ReturnType<typeof rootReducer>
