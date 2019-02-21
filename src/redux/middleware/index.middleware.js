export function actionsOnDispatch({ dispatch }) {
  return next => action => {
    if (action.type === 'USER_LOADED') {
      dispatch({
        type: 'STATUS_CHANGED',
        payload: true
      })
    }
    return next(action)
  }
}
