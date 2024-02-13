import { COMPLETE_EVENT_PAYMENT_FAILED, COMPLETE_EVENT_PAYMENT_REQUEST, COMPLETE_EVENT_PAYMENT_SUCCESS, CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_FAVORITE_SPONSOR_FAILED, CREATE_FAVORITE_SPONSOR_REQUEST, CREATE_FAVORITE_SPONSOR_SUCCESS, CREATE_SPONSORING_ITEM_FAILED, CREATE_SPONSORING_ITEM_REQUEST, CREATE_SPONSORING_ITEM_SUCCESS, CREATE_SPONSOR_FAILED, CREATE_SPONSOR_REQUEST, CREATE_SPONSOR_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_FAVORITE_EVENT_FAILED, GET_FAVORITE_EVENT_REQUEST, GET_FAVORITE_EVENT_SUCCESS, GET_SPONSORED_CONTANT_FAILED, GET_SPONSORED_CONTANT_REQUEST, GET_SPONSORED_CONTANT_SUCCESS, GET_SPONSORED_CONTENT_BY_ID_FAILED, GET_SPONSORED_CONTENT_BY_ID_REQUEST, GET_SPONSORED_CONTENT_BY_ID_SUCCESS, GET_SPONSORED_EVENT_FAILED, GET_SPONSORED_EVENT_REQUEST, GET_SPONSORED_EVENT_SUCCESS, GET_SPONSORED_ITEM_FAILED, GET_SPONSORED_ITEM_REQUEST, GET_SPONSORED_ITEM_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "../constant"


export const sponsorReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SPONSOR_REQUEST:
            return { ...state, loading: true }
        case CREATE_SPONSOR_SUCCESS:
            return { loading: false, createSponsor: action.payload }
        case CREATE_SPONSOR_FAILED:
            return { loading: false, createSponsorError: action.payload }
        case COMPLETE_EVENT_PAYMENT_REQUEST:
            return { ...state, loading: true }
        case COMPLETE_EVENT_PAYMENT_SUCCESS:
            return { loading: false, completeEventPayment: action.payload }
        case COMPLETE_EVENT_PAYMENT_FAILED:
            return { loading: false, completeEventPaymentError: action.payload }
        case CREATE_FAVORITE_SPONSOR_REQUEST:
            return { ...state, loading: true }
        case CREATE_FAVORITE_SPONSOR_SUCCESS:
            return { loading: false, createFavoriteSponsor: action.payload }
        case CREATE_FAVORITE_SPONSOR_FAILED:
            return { loading: false, createFavoriteSponsorError: action.payload }
        case GET_SPONSORED_EVENT_REQUEST:
            return { ...state, loading: true }
        case GET_SPONSORED_EVENT_SUCCESS:
            return { loading: false, SponsoredEvent: action.payload }
        case GET_SPONSORED_EVENT_FAILED:
            return { loading: false, sponsoredEventError: action.payload }
        case GET_FAVORITE_EVENT_REQUEST:
            return { ...state, loading: true }
        case GET_FAVORITE_EVENT_SUCCESS:
            return { loading: false, favoriteEvent: action.payload }
        case GET_FAVORITE_EVENT_FAILED:
            return { loading: false, favoriteEventError: action.payload }
        case GET_SPONSORED_CONTANT_REQUEST:
            return { ...state, loading: true }
        case GET_SPONSORED_CONTANT_SUCCESS:
            return { loading: false, SponsoredContent: action.payload }
        case GET_SPONSORED_CONTANT_FAILED:
            return { loading: false, sponsoredContentError: action.payload }
        case GET_SPONSORED_ITEM_REQUEST:
            return { ...state, loading: true }
        case GET_SPONSORED_ITEM_SUCCESS:
            return { loading: false, SponsoredItem: action.payload }
        case GET_SPONSORED_ITEM_FAILED:
            return { loading: false, sponsoredItemError: action.payload }
        case GET_SPONSORED_CONTENT_BY_ID_REQUEST:
            return { ...state, loading: true }
        case GET_SPONSORED_CONTENT_BY_ID_SUCCESS:
            return { loading: false, SponsoredContentById: action.payload }
        case GET_SPONSORED_CONTENT_BY_ID_FAILED:
            return { loading: false, sponsoredContentByIdError: action.payload }
        case CREATE_SPONSORING_ITEM_REQUEST:
            return { ...state, loading: true }
        case CREATE_SPONSORING_ITEM_SUCCESS:
            return { loading: false, SponsoringItemDetails: action.payload }
        case CREATE_SPONSORING_ITEM_FAILED:
            return { loading: false, SponsoringItemError: action.payload }
        default:
            return state
    }
}