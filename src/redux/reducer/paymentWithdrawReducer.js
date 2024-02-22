import { APPROVE_WITHDRAW_FAILED, APPROVE_WITHDRAW_REQUEST, APPROVE_WITHDRAW_SUCCESS, GET_PAYMENT_WITHDRAW_FAILED, GET_PAYMENT_WITHDRAW_REQUEST, GET_PAYMENT_WITHDRAW_SUCCESS, PAYMENT_WITHDRAW_LIST_FAILED, PAYMENT_WITHDRAW_LIST_REQUEST, PAYMENT_WITHDRAW_LIST_SUCCESS } from "../constant"


export const paymentWithdrawReducer = (state = {},action) => {
    switch(action.type) {
      case GET_PAYMENT_WITHDRAW_REQUEST:
        return { ...state, loading: true }
      case GET_PAYMENT_WITHDRAW_SUCCESS:
        return { loading: false, paymentWithdrawDetails: action.payload }
      case GET_PAYMENT_WITHDRAW_FAILED:
        return { loading: false, paymentWithdrawDetailsError: action.payload }
      case PAYMENT_WITHDRAW_LIST_REQUEST:
        return { ...state, loading: true }
      case PAYMENT_WITHDRAW_LIST_SUCCESS:
        return { loading: false, paymentWithdrawDetails: action.payload }
      case PAYMENT_WITHDRAW_LIST_FAILED:
        return { loading: false, paymentWithdrawDetailsError: action.payload }
      case APPROVE_WITHDRAW_REQUEST:
        return { ...state, loading: true }
      case APPROVE_WITHDRAW_SUCCESS:
        return { loading: false, approveWithdraw: action.payload }
      case APPROVE_WITHDRAW_FAILED:
        return { loading: false, approveWithdrawError: action.payload }
      default:
        return state
    }
  }