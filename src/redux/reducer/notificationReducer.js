import { GET_NOTIFICATION_FAILED, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from "../constant"


export const notificationReducer = (state = {},action) => {
    switch(action.type) {
      case GET_NOTIFICATION_REQUEST:
        return { ...state, loading: true }
      case GET_NOTIFICATION_SUCCESS:
        return { loading: false, notificationDetails: action.payload }
      case GET_NOTIFICATION_FAILED:
        return { loading: false, notificationError: action.payload }
      default:
        return state
    }
  }