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
