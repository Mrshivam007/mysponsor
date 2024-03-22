import { CREATE_CONTENT_FAILED, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, GET_ALL_CONTENT_FAILED, GET_ALL_CONTENT_REQUEST, GET_ALL_CONTENT_SUCCESS, GET_ALL_CREATOR_FAILED, GET_ALL_CREATOR_REQUEST, GET_ALL_CREATOR_SUCCESS, GET_CONTENT_APPROACH_FAILED, GET_CONTENT_APPROACH_REQUEST, GET_CONTENT_APPROACH_SUCCESS, GET_CONTENT_CATEGORY_FAILED, GET_CONTENT_CATEGORY_REQUEST, GET_CONTENT_CATEGORY_SUCCESS, GET_CONTENT_FAILED, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CREATOR_BY_ID_FAILED, GET_CREATOR_BY_ID_REQUEST, GET_CREATOR_BY_ID_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, UPDATE_CONTENT_FAILED, UPDATE_CONTENT_REQUEST, UPDATE_CONTENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from "../constant"


export const creatorReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_CREATOR_REQUEST:
            return { ...state, loading: true }
        case GET_ALL_CREATOR_SUCCESS:
            return { loading: false, allCreatorDetails: action.payload }
        case GET_ALL_CREATOR_FAILED:
            return { loading: false, allCreatorError: action.payload }
        case GET_CONTENT_APPROACH_REQUEST:
            return { ...state, loading: true }
        case GET_CONTENT_APPROACH_SUCCESS:
            return { loading: false, creatorApproachDetails: action.payload }
        case GET_CONTENT_APPROACH_FAILED:
            return { loading: false, creatorApproachError: action.payload }
        case GET_CREATOR_BY_ID_REQUEST:
            return { ...state, creatorByIdLoading: true }
        case GET_CREATOR_BY_ID_SUCCESS:
            return { loading: false, creatorById: action.payload }
        case GET_CREATOR_BY_ID_FAILED:
            return { loading: false, creatorByIdError: action.payload }
        default:
            return state
    }
}