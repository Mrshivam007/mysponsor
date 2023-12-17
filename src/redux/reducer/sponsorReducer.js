import { CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_SPONSOR_FAILED, CREATE_SPONSOR_REQUEST, CREATE_SPONSOR_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_SPONSORED_EVENT_FAILED, GET_SPONSORED_EVENT_REQUEST, GET_SPONSORED_EVENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "../constant"


export const sponsorReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SPONSOR_REQUEST:
            return { ...state, loading: true }
        case CREATE_SPONSOR_SUCCESS:
            return { loading: false, createSpnsor: action.payload }
        case CREATE_SPONSOR_FAILED:
            return { loading: false, createSponsorError: action.payload }
        case GET_SPONSORED_EVENT_REQUEST:
            return { ...state, loading: true }
        case GET_SPONSORED_EVENT_SUCCESS:
            return { loading: false, SponsoredEvent: action.payload }
        case GET_SPONSORED_EVENT_FAILED:
            return { loading: false, sponsoredEventError: action.payload }
        default:
            return state
    }
}