import {combineReducers} from 'redux'

const businesses = (state = [], action) => {
  switch(action.type){
    case 'ADD_BUSINESS': 
      return [...state, action.value]
    default: 
      return state
  }
}

export default combineReducers({ businesses })