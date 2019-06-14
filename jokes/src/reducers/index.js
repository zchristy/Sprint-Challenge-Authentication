import { combineReducers } from 'redux'

import fetchJokesReducer from './fetchJokesReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'

export default combineReducers({
  fetchJokesReducer,
  loginReducer,
  registerReducer
})
