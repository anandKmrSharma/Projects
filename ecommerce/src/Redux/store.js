import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux"

import  thunk from "redux-thunk"
import { productsReducer } from "./products/reducer"

const rootReducer= combineReducers({ecommerceData: productsReducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE|| compose;


export const store= legacy_createStore(
         rootReducer,
         composeEnhancers(applyMiddleware(thunk))
)