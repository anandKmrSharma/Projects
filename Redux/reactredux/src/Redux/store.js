import reducer, { counterReducer } from "./Counter/reducer"
import { todoReducer } from "./Todo/reducer";
import {combineReducers, createStore, Legacy_createStore} from "redux"

const rootReducer= combineReducers({
           counter: counterReducer,
           todotodoReducer: todoReducer
});


const store= createStore(rootReducer, initState);
console.log("store", store.getState())

export {store}
