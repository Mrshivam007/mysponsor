import axios from 'axios';
import apiurl from '../../constant/config';
import { CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, DELETE_EVENT_FAILED, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, GET_ALL_EVENT_FAILED, GET_ALL_EVENT_REQUEST, GET_ALL_EVENT_SUCCESS, GET_EVENT_BY_ID_FAILED, GET_EVENT_BY_ID_REQUEST, GET_EVENT_BY_ID_SUCCESS, GET_EVENT_CATEGORY_FAILED, GET_EVENT_CATEGORY_REQUEST, GET_EVENT_CATEGORY_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from '../constant';

export const fetchEvent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
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


export const fetchAllEvent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_EVENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/all-event/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_ALL_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


export const fetchEventbyId = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_BY_ID_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/event/${id}`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_EVENT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EVENT_BY_ID_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const fetchEventCategory = () => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_CATEGORY_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/populer-event/`,
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



  export const createEvent = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_EVENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/event/`,
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
          console.log(error);
        }
  };


  export const updateEvent = (eventId, formData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_EVENT_REQUEST });
  
      // const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.put(
        `${apiurl}/api/user/event/${eventId}`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: UPDATE_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const deleteEvent = (eventId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_EVENT_REQUEST });
  
      //   const access = JSON.parse(localStorage.getItem("access"));
  
      await axios.delete(
        `${apiurl}/api/user/event/${eventId}`
        // { headers: { Authorization: `Bearer ${access}` } }
      );
  
      dispatch({
        type: DELETE_EVENT_SUCCESS,
        payload: eventId, // You might want to pass the eventId to update the state accordingly after deletion
      });
    } catch (error) {
      dispatch({
        type: DELETE_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  
  