// our initial state
const initialState = {
  data: {},
  isLoaded: false
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOADED') {
    return {
      ...state, // this copies the old state
      data: action.payload, // this overrides the "data" property
      isLoaded: true // this overrides the "isLoaded" property
    }
  }

  return state
}

export default userReducer
