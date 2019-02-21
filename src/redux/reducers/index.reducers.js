import userReducer from './user.reducers.js'
import newsReducer from './news.reducers.js'
import statusReducer from './status.reducers.js'
import { combineReducers } from 'redux'

export default combineReducers({
  userReducer,
  newsReducer,
  statusReducer
})
