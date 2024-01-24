import { CONTENT_APPROVE_FAILED, CONTENT_APPROVE_REQUEST, CONTENT_APPROVE_SUCCESS, EVENT_APPROVE_FAILED, EVENT_APPROVE_REQUEST, EVENT_APPROVE_SUCCESS, GET_CONTENT_APPROVE_FAILED, GET_CONTENT_APPROVE_REQUEST, GET_CONTENT_APPROVE_SUCCESS, GET_EVENT_APPROVE_FAILED, GET_EVENT_APPROVE_REQUEST, GET_EVENT_APPROVE_SUCCESS } from "../constant"


export const adminReducer = (state = {},action) => {
    switch(action.type) {
      case GET_EVENT_APPROVE_REQUEST:
        return { ...state, loading: true }
      case GET_EVENT_APPROVE_SUCCESS:
        return { loading: false, eventApproveDetails: action.payload }
      case GET_EVENT_APPROVE_FAILED:
        return { loading: false, eventApproveDetailsError: action.payload }
      case GET_CONTENT_APPROVE_REQUEST:
        return { ...state, loading: true }
      case GET_CONTENT_APPROVE_SUCCESS:
        return { loading: false, contentApproveDetails: action.payload }
      case GET_CONTENT_APPROVE_FAILED:
        return { loading: false, contentApproveDetailsError: action.payload }
      case EVENT_APPROVE_REQUEST:
        return { ...state, loading: true }
      case EVENT_APPROVE_SUCCESS:
        return { loading: false, eventApprove: action.payload }
      case EVENT_APPROVE_FAILED:
        return { loading: false, eventApproveError: action.payload }
      case CONTENT_APPROVE_REQUEST:
        return { ...state, loading: true }
      case CONTENT_APPROVE_SUCCESS:
        return { loading: false, contentApprove: action.payload }
      case CONTENT_APPROVE_FAILED:
        return { loading: false, contentApproveError: action.payload }
      default:
        return state
    }
  }