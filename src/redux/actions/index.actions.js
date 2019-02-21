import axios from 'axios'

export function loadUser() {
  // this will be used to trigger the reducer
  return dispatch =>
    axios.get('https://jsonplaceholder.typicode.com/users/1').then(
      json =>
        new Promise(resolve => {
          // artificial timeout simulation
          setTimeout(() => {
            dispatch({
              type: 'USER_LOADED',
              payload: json.data
            })
            resolve()
          }, Math.floor(Math.random() * 2000) + 500)
        })
    )
}

export function loadNews() {
  // this will be used to trigger the reducer
  return dispatch =>
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      json =>
        new Promise(resolve => {
          // artificial timeout simulation
          setTimeout(() => {
            dispatch({
              type: 'NEWS_LOADED',
              payload: json.data
            })
            resolve()
          }, Math.floor(Math.random() * 2000) + 500)
        })
    )
}

// the correct axios request without fake delay would look like:

// axios.get('https://jsonplaceholder.typicode.com/posts').then(json => {
//       dispatch({
//         type: 'NEWS_LOADED',
//         payload: json.data
//       })
//     })
