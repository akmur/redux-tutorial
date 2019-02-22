// importing  basic redux packages
import { createStore, applyMiddleware, compose } from 'redux'
// importing our combined reducers
import combineReducers from '../reducers/index.reducers'
// importing our middleware
import { middlewareActions } from '../middleware/index.middleware'
// this is needed to be able to do ajax requests
import thunk from 'redux-thunk'
// the following line is used for the redux devtools chrome extension
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// creating the store
const store = createStore(
  combineReducers,
  storeEnhancers(applyMiddleware(middlewareActions, thunk))
)

// exporting the store
export default store
