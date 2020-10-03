import {combineReducers} from 'redux'

const businesses = (state = [], action) => {
  switch(action.type){
    case 'ADD_BUSINESS': 
      return [...state, action.value]
    case 'REMOVE_BUSINESS':
      const business = [...state]
      business.splice(action.value, 1)
      return business
    default: 
      return state
  }
}

const loggedIn = (state = false, action) => {
  switch(action.type){
    case 'LOGGED_IN':
      return true
    case 'LOGGED_OUT':
      return false
    default: 
      return state
  }
}

export default combineReducers({ businesses, loggedIn })