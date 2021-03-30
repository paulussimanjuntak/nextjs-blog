import { updateObject } from 'lib/utility'
import * as actionType from 'store/actions/actionTypes'

const initialState = {
  user: false
}

const login = (state, _) => {
  return updateObject(state, {
    user: true
  })
}

const logout = (state, _) => {
  return updateObject(state, {
    user: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return login(state, action)
    case actionType.LOGOUT:
      return logout(state, action)

    default:
      return state
  }
}

export default reducer
