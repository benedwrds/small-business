import { createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(
  reducers,
  state,
  compose(applyMiddleware(thunk), composeWithDevTools())
)

export default store
