import { GET_CONTENT_BY_ID_FAILED, GET_CONTENT_BY_ID_REQUEST, GET_CONTENT_BY_ID_SUCCESS } from "../constant"


export const contentByIdReducer = (state = {},action) => {
    switch(action.type) {
      case GET_CONTENT_BY_ID_REQUEST:
        return { ...state, contentByIdLoading: true }
      case GET_CONTENT_BY_ID_SUCCESS:
        return { loading: false, contentById: action.payload }
      case GET_CONTENT_BY_ID_FAILED:
        return { loading: false, contentByIdError: action.payload }
      default:
        return state
    }
  }