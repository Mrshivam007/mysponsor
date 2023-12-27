import { CREATE_CONTENT_FAILED, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, GET_CONTENT_CATEGORY_FAILED, GET_CONTENT_CATEGORY_REQUEST, GET_CONTENT_CATEGORY_SUCCESS, GET_CONTENT_FAILED, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, UPDATE_CONTENT_FAILED, UPDATE_CONTENT_REQUEST, UPDATE_CONTENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "../constant"


export const contentReducer = (state = {},action) => {
    switch(action.type) {
      case GET_CONTENT_REQUEST:
        return { ...state, loading: true }
      case GET_CONTENT_SUCCESS:
        return { loading: false, contentDetails: action.payload }
      case GET_CONTENT_FAILED:
        return { loading: false, contentDetailsError: action.payload }
      case GET_CONTENT_CATEGORY_REQUEST:
        return { ...state, loading: true }
      case GET_CONTENT_CATEGORY_SUCCESS:
        return { loading: false, contentCategory: action.payload }
      case GET_CONTENT_CATEGORY_FAILED:
        return { loading: false, contentCategoryError: action.payload }
      case CREATE_CONTENT_REQUEST:
        return { ...state, loading: true }
      case CREATE_CONTENT_SUCCESS:
        return { loading: false, createContent: action.payload }
      case CREATE_CONTENT_FAILED:
        return { loading: false, createContentError: action.payload }
      case UPDATE_CONTENT_REQUEST:
        return { ...state, loading: true }
      case UPDATE_CONTENT_SUCCESS:
        return { loading: false, updateContent: action.payload }
      case UPDATE_CONTENT_FAILED:
        return { loading: false, updateContentError: action.payload }
      default:
        return state
    }
  }