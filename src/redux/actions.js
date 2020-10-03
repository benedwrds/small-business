export const addBusiness = (car) => {
  return {
      type: 'ADD_BUSINESS',
      value: car
  }
}

export const removeBusiness = (index) => {
  return {
      type: 'REMOVE_BUSINESS',
      value: index
  }
}

export const loggedIn = () => {
  return {
    type: 'LOGGED_IN'
  }
}

export const loggedOut = () => {
  return {
    type: 'LOGGED_OUT'
  }
}
