import { CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, GET_ALL_EVENT_FAILED, GET_ALL_EVENT_REQUEST, GET_ALL_EVENT_SUCCESS, GET_EVENT_CATEGORY_FAILED, GET_EVENT_CATEGORY_REQUEST, GET_EVENT_CATEGORY_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "../constant"


export const eventReducer = (state = {},action) => {
    switch(action.type) {
      case GET_EVENT_REQUEST:
        return { ...state, loading: true }
      case GET_EVENT_SUCCESS:
        return { loading: false, eventDetails: action.payload }
      case GET_EVENT_FAILED:
        return { loading: false, eventDetailsError: action.payload }
      case GET_ALL_EVENT_REQUEST:
        return { ...state, loading: true }
      case GET_ALL_EVENT_SUCCESS:
        return { loading: false, eventAllDetails: action.payload }
      case GET_ALL_EVENT_FAILED:
        return { loading: false, eventAllDetailsError: action.payload }
      case GET_EVENT_CATEGORY_REQUEST:
        return { ...state, loading: true }
      case GET_EVENT_CATEGORY_SUCCESS:
        return { loading: false, eventCategory: action.payload }
      case GET_EVENT_CATEGORY_FAILED:
        return { loading: false, eventCategoryError: action.payload }
      case CREATE_EVENT_REQUEST:
        return { ...state, loading: true }
      case CREATE_EVENT_SUCCESS:
        return { loading: false, createEventDetails: action.payload }
      case CREATE_EVENT_FAILED:
        return { loading: false, createEventError: action.payload }
      case UPDATE_EVENT_REQUEST:
        return { ...state, loading: true }
      case UPDATE_EVENT_SUCCESS:
        return { loading: false, updateEvent: action.payload }
      case UPDATE_EVENT_FAILED:
        return { loading: false, updateEventError: action.payload }
      default:
        return state
    }
  }