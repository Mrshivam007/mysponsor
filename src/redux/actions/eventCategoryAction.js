import axios from "axios";
import apiurl from "../../constant/config";
import {
  GET_EVENT_CATEGORY_FAILED,
  GET_EVENT_CATEGORY_REQUEST,
  GET_EVENT_CATEGORY_SUCCESS,
} from "../constant";

export const fetchEventCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENT_CATEGORY_REQUEST });

    //   const access = JSON.parse(localStorage.getItem("access"));

    const { data } = await axios.get(
      `${apiurl}/api/user/populer-event/`
      // {
      //   headers: { Authorization: `Bearer ${access}` },
      // }
    );
    dispatch({
      type: GET_EVENT_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EVENT_CATEGORY_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
