import { combineReducers } from 'redux'
import prices from './prices'
import history from './history'

const pricesApp = combineReducers({
  prices,
  history
})

export default pricesApp
