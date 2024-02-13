import {
  GET_EVENT_CATEGORY_FAILED,
  GET_EVENT_CATEGORY_REQUEST,
  GET_EVENT_CATEGORY_SUCCESS,
} from "../constant";

export const eventCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENT_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case GET_EVENT_CATEGORY_SUCCESS:
      return { loading: false, eventCategory: action.payload };
    case GET_EVENT_CATEGORY_FAILED:
      return { loading: false, eventCategoryError: action.payload };
    default:
      return state;
  }
};
