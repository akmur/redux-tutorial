export function loadUser() {
  // this will be used to trigger the reducer
  return {
    type: 'LOAD_USER'
  }
}

export function loadNews() {
  return {
    type: 'LOAD_NEWS'
  }
}
