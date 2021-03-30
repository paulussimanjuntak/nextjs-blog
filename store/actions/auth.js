import * as actionType from './actionTypes'

const onLogin = () => {
  return {
    type: actionType.LOGIN,
  }
}

const onLogout = () => {
  return {
    type: actionType.LOGOUT,
  }
}

export const login = () => {
  return dispatch => {
    dispatch(onLogin())
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(onLogout())
  }
}
