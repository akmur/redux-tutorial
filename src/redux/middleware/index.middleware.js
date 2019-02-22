import axios from 'axios'

export function actionsOnDispatch({ dispatch }) {
  return next => action => {
    if (action.type === 'USER_LOADED') {
      dispatch({
        type: 'STATUS_CHANGED',
        payload: true
      })
    }

    if (action.type === 'LOAD_NEWS') {
      console.log('load news')
      return axios.get('https://jsonplaceholder.typicode.com/posts').then(
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

    if (action.type === 'LOAD_USER') {
      console.log('load news')
      return axios.get('https://jsonplaceholder.typicode.com/users/1').then(
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

    return next(action)
  }
}
