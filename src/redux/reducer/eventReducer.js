import { CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from "../constant"


export const eventReducer = (state = {},action) => {
    switch(action.type) {
      case GET_EVENT_REQUEST:
        return { ...state, loading: true }
      case GET_EVENT_SUCCESS:
        return { loading: false, eventDetails: action.payload }
      case GET_EVENT_FAILED:
        return { loading: false, eventDetailsError: action.payload }
      case CREATE_EVENT_REQUEST:
        return { ...state, loading: true }
      case CREATE_EVENT_SUCCESS:
        return { loading: false, createEvent: action.payload }
      case CREATE_EVENT_FAILED:
        return { loading: false, createEventError: action.payload }
      default:
        return state
    }
  }