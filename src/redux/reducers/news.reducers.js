// our initial state
const initialState = {
  data: {},
  isLoaded: false
}

const newsReducer = (state = initialState, action) => {
  if (action.type === 'NEWS_LOADED') {
    return {
      ...state, // this copies the old state
      data: action.payload, // this overrides the "data" property
      isLoaded: true // this overrides the "isLoaded" property
    }
  }

  return state
}

export default newsReducer
