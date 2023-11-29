import axios from 'axios';
import apiurl from '../../constant/config';
import { CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS } from '../constant';

export const fetchEvent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/event/`,
        // {
        //   headers: { Authorization: `Bearer ${access}` },
        // }
      );  
      dispatch({
        type: GET_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const createEvent = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_EVENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/teacher/classup/create`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };