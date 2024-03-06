import { CREATE_BANK_DETAILS_FAILED, CREATE_BANK_DETAILS_REQUEST, CREATE_BANK_DETAILS_SUCCESS, CREATE_CONTENT_PROFILE_FAILED, CREATE_CONTENT_PROFILE_REQUEST, CREATE_CONTENT_PROFILE_SUCCESS, CREATE_EVENT_PROFILE_FAILED, CREATE_EVENT_PROFILE_REQUEST, CREATE_EVENT_PROFILE_SUCCESS, CREATE_SPONSOR_PROFILE_FAILED, CREATE_SPONSOR_PROFILE_REQUEST, CREATE_SPONSOR_PROFILE_SUCCESS, GET_BANK_DETAILS_FAILED, GET_BANK_DETAILS_REQUEST, GET_BANK_DETAILS_SUCCESS, GET_CONTENT_PROFILE_FAILED, GET_CONTENT_PROFILE_REQUEST, GET_CONTENT_PROFILE_SUCCESS, GET_EVENT_PROFILE_FAILED, GET_EVENT_PROFILE_REQUEST, GET_EVENT_PROFILE_SUCCESS, GET_SPONSOR_PROFILE_FAILED, GET_SPONSOR_PROFILE_REQUEST, GET_SPONSOR_PROFILE_SUCCESS } from "../constant"

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SPONSOR_PROFILE_REQUEST:
      return { ...state, loading: true }
    case GET_SPONSOR_PROFILE_SUCCESS:
      return { loading: false, sponsorDetails: action.payload }
    case GET_SPONSOR_PROFILE_FAILED:
      return { loading: false, sponsorDetailsError: action.payload }
    case GET_EVENT_PROFILE_REQUEST:
      return { ...state, loading: true }
    case GET_EVENT_PROFILE_SUCCESS:
      return { loading: false, eventDetails: action.payload }
    case GET_EVENT_PROFILE_FAILED:
      return { loading: false, eventDetailsError: action.payload }
    case GET_CONTENT_PROFILE_REQUEST:
      return { ...state, loading: true }
    case GET_CONTENT_PROFILE_SUCCESS:
      return { loading: false, contentDetails: action.payload }
    case GET_CONTENT_PROFILE_FAILED:
      return { loading: false, contentDetailsError: action.payload }
    case CREATE_SPONSOR_PROFILE_REQUEST:
      return { ...state, loading: true }
    case CREATE_SPONSOR_PROFILE_SUCCESS:
      return { loading: false, createSponsorDetails: action.payload }
    case CREATE_SPONSOR_PROFILE_FAILED:
      return { loading: false, createSponsorDetailsError: action.payload }
    case CREATE_EVENT_PROFILE_REQUEST:
      return { ...state, loading: true }
    case CREATE_EVENT_PROFILE_SUCCESS:
      return { loading: false, createEventDetails: action.payload }
    case CREATE_EVENT_PROFILE_FAILED:
      return { loading: false, createEventDetailsError: action.payload }
    case CREATE_CONTENT_PROFILE_REQUEST:
      return { ...state, loading: true }
    case CREATE_CONTENT_PROFILE_SUCCESS:
      return { loading: false, createContentDetails: action.payload }
    case CREATE_CONTENT_PROFILE_FAILED:
      return { loading: false, createContentDetailsError: action.payload }
    case CREATE_BANK_DETAILS_REQUEST:
      return { ...state, loading: true }
    case CREATE_BANK_DETAILS_SUCCESS:
      return { loading: false, createBankDetailResponse: action.payload }
    case CREATE_BANK_DETAILS_FAILED:
      return { loading: false, createBankDetailsError: action.payload }
    case GET_BANK_DETAILS_REQUEST:
      return { ...state, loading: true }
    case GET_BANK_DETAILS_SUCCESS:
      return { loading: false, bankDetails: action.payload }
    case GET_BANK_DETAILS_FAILED:
      return { loading: false, bankDetailsError: action.payload }
    default:
      return state
  }
}