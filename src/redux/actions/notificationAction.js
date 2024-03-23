import axios from 'axios';
import apiurl from '../../constant/config';
import { CLEAR_ALL_NOTIFICATION_FAILED, CLEAR_ALL_NOTIFICATION_REQUEST, CLEAR_ALL_NOTIFICATION_SUCCESS, CLEAR_NOTIFICATION_FAILED, CLEAR_NOTIFICATION_REQUEST, CLEAR_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED, GET_NOTIFICATION_REQUEST, GET_NOTIFICATION_SUCCESS } from "../constant";


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

  export const clearNotification = (id) => async (dispatch) => {
    try {
      dispatch({ type: CLEAR_NOTIFICATION_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.patch(
        `${apiurl}/api/notification/${id}/`,
        {
          "is_read": true // This should be included in the data object
        },
        {
          headers: { Authorization: `Bearer ${access}` }, // This should be separate from the data object
        }
      );
  
      dispatch({
        type: CLEAR_NOTIFICATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLEAR_NOTIFICATION_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

  export const clearAllNotification = () => async (dispatch) => {
    try {
      dispatch({ type: CLEAR_ALL_NOTIFICATION_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/notifications/clear/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: CLEAR_ALL_NOTIFICATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLEAR_ALL_NOTIFICATION_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };