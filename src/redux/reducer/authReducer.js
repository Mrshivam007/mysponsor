import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS } from "../constant"


export const authReducer = (state = {},action) => {
    switch(action.type) {
      case AUTH_LOGIN_REQUEST:
        return { ...state, loading: true }
      case AUTH_LOGIN_SUCCESS:
        return { loading: false, userDetails: action.payload }
      case AUTH_LOGIN_FAILED:
        return { loading: false, error: action.payload }
      case AUTH_SIGNUP_REQUEST:
        return { ...state, loading: true }
      case AUTH_SIGNUP_SUCCESS:
        return { loading: false, userDetails: action.payload }
      case AUTH_SIGNUP_FAILED:
        return { loading: false, error: action.payload }
      case AUTH_LOGOUT:
        return { userDetails: null }
      default:
        return state
    }
  }