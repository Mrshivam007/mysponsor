import axios from 'axios';
import apiurl from '../../constant/config';
import { GET_NOTIFICATION_FAILED, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from "../constant";


export const getNotification = () => async (dispatch) => {
    try {
      dispatch({ type: GET_NOTIFICATION_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/notifications/?is_read=false`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_NOTIFICATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_NOTIFICATION_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };