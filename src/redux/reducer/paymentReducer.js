import { APPROVE_CONTENT_PAYMENT_FAILED, APPROVE_CONTENT_PAYMENT_REQUEST, APPROVE_CONTENT_PAYMENT_SUCCESS, APPROVE_EVENT_PAYMENT_FAILED, APPROVE_EVENT_PAYMENT_REQUEST, APPROVE_EVENT_PAYMENT_SUCCESS, GET_PAYMENT_FAILED, GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS, GET_PAYMENT_TRANSACTION_FAILED, GET_PAYMENT_TRANSACTION_REQUEST, GET_PAYMENT_TRANSACTION_SUCCESS, GET_PAYMENT_WITHDRAW_FAILED, GET_PAYMENT_WITHDRAW_REQUEST, GET_PAYMENT_WITHDRAW_SUCCESS } from "../constant"


export const paymentReducer = (state = {},action) => {
    switch(action.type) {
      case GET_PAYMENT_REQUEST:
        return { ...state, loading: true }
      case GET_PAYMENT_SUCCESS:
        return { loading: false, paymentDetails: action.payload }
      case GET_PAYMENT_FAILED:
        return { loading: false, paymentDetailsError: action.payload }
      case GET_PAYMENT_TRANSACTION_REQUEST:
        return { ...state, loading: true }
      case GET_PAYMENT_TRANSACTION_SUCCESS:
        return { loading: false, paymentTransactionDetails: action.payload }
      case GET_PAYMENT_TRANSACTION_FAILED:
        return { loading: false, paymentTransactionDetailsError: action.payload }
      case APPROVE_EVENT_PAYMENT_REQUEST:
        return { ...state, loading: true }
      case APPROVE_EVENT_PAYMENT_SUCCESS:
        return { loading: false, approveEventDetails: action.payload }
      case APPROVE_EVENT_PAYMENT_FAILED:
        return { loading: false, approveEventDetailsError: action.payload }
      case APPROVE_CONTENT_PAYMENT_REQUEST:
        return { ...state, loading: true }
      case APPROVE_CONTENT_PAYMENT_SUCCESS:
        return { loading: false, approveContentDetails: action.payload }
      case APPROVE_CONTENT_PAYMENT_FAILED:
        return { loading: false, approveContentDetailsError: action.payload }
      default:
        return state
    }
  }