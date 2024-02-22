import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, EMAIL_OTP_FAILED, EMAIL_OTP_REQUEST, EMAIL_OTP_SUCCESS, EMAIL_OTP_VERIFICATION_FAILED, EMAIL_OTP_VERIFICATION_REQUEST, EMAIL_OTP_VERIFICATION_SUCCESS, GOOGLE_AUTH_LOGIN_FAILED, GOOGLE_AUTH_LOGIN_REQUEST, GOOGLE_AUTH_LOGIN_SUCCESS, PASSWORD_RESET_FAILED, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from "../constant"


export const authReducer = (state = {},action) => {
    switch(action.type) {
      case GOOGLE_AUTH_LOGIN_REQUEST:
        return { ...state, loading: true }
      case GOOGLE_AUTH_LOGIN_SUCCESS:
        return { loading: false, userDetails: action.payload }
      case GOOGLE_AUTH_LOGIN_FAILED:
        return { loading: false, GoogleDetailserror: action.payload }
      case AUTH_LOGIN_REQUEST:
        return { ...state, loading: true }
      case AUTH_LOGIN_SUCCESS:
        return { loading: false, userDetails: action.payload }
      case AUTH_LOGIN_FAILED:
        return { loading: false, error: action.payload }
      case PASSWORD_RESET_REQUEST:
        return { ...state, loading: true }
      case PASSWORD_RESET_SUCCESS:
        return { loading: false, passwordResetDetails: action.payload }
      case PASSWORD_RESET_FAILED:
        return { loading: false, passwordResetError: action.payload }
      case EMAIL_OTP_REQUEST:
        return { ...state, loading: true }
      case EMAIL_OTP_SUCCESS:
        return { loading: false, emailOtpDetails: action.payload }
      case EMAIL_OTP_FAILED:
        return { loading: false, emailOtpError: action.payload }
      case EMAIL_OTP_VERIFICATION_REQUEST:
        return { ...state, loading: true }
      case EMAIL_OTP_VERIFICATION_SUCCESS:
        return { loading: false, emailOtpVerificationDetails: action.payload }
      case EMAIL_OTP_VERIFICATION_FAILED:
        return { loading: false, emailOtpVerificationError: action.payload }
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