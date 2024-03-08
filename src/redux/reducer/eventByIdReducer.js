import { GET_EVENT_BY_ID_FAILED, GET_EVENT_BY_ID_REQUEST, GET_EVENT_BY_ID_SUCCESS } from "../constant"


export const eventByIdReducer = (state = {},action) => {
    switch(action.type) {
      case GET_EVENT_BY_ID_REQUEST:
        return { ...state, eventByIdLoading: true }
      case GET_EVENT_BY_ID_SUCCESS:
        return { loading: false, eventById: action.payload }
      case GET_EVENT_BY_ID_FAILED:
        return { loading: false, eventByIdError: action.payload }
      default:
        return state
    }
  }