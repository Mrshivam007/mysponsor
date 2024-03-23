import { CLEAR_ALL_NOTIFICATION_FAILED, CLEAR_ALL_NOTIFICATION_REQUEST, CLEAR_ALL_NOTIFICATION_SUCCESS, CLEAR_NOTIFICATION_FAILED, CLEAR_NOTIFICATION_REQUEST, CLEAR_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from "../constant"


export const notificationReducer = (state = {},action) => {
    switch(action.type) {
      case GET_NOTIFICATION_REQUEST:
        return { ...state, loading: true }
      case GET_NOTIFICATION_SUCCESS:
        return { loading: false, notificationDetails: action.payload }
      case GET_NOTIFICATION_FAILED:
        return { loading: false, notificationError: action.payload }
      case CLEAR_ALL_NOTIFICATION_REQUEST:
        return { ...state, loading: true }
      case CLEAR_ALL_NOTIFICATION_SUCCESS:
        return { loading: false, clearAllNotificationDetails: action.payload }
      case CLEAR_ALL_NOTIFICATION_FAILED:
        return { loading: false, clearAllNotificationError: action.payload }
      case CLEAR_NOTIFICATION_REQUEST:
        return { ...state, loading: true }
      case CLEAR_NOTIFICATION_SUCCESS:
        return { loading: false, clearNotificationDetails: action.payload }
      case CLEAR_NOTIFICATION_FAILED:
        return { loading: false, clearNotificationError: action.payload }
      default:
        return state
    }
  }