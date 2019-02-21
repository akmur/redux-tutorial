// our initial state
const initialState = {
  isLoaded: false
}

const statusReducer = (state = initialState, action) => {
  if (action.type === 'STATUS_CHANGED') {
    return {
      ...state, // this copies the old state
      isLoaded: true // this overrides the "isLoaded" property
    }
  }

  return state
}

export default statusReducer
