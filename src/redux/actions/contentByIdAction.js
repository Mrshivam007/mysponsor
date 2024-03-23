import axios from "axios";
import apiurl from "../../constant/config";
import { GET_CONTENT_BY_ID_FAILED, GET_CONTENT_BY_ID_REQUEST, GET_CONTENT_BY_ID_SUCCESS } from "../constant";


export const fetchContentbyId = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTENT_BY_ID_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/content/${id}`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_CONTENT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTENT_BY_ID_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };