import axios from 'axios';
import apiurl from '../../constant/config';
import { CREATE_CONTENT_FAILED, CREATE_CONTENT_REQUEST, CREATE_CONTENT_SUCCESS, CREATE_EVENT_FAILED, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, DELETE_CONTENT_FAILED, DELETE_CONTENT_REQUEST, DELETE_CONTENT_SUCCESS, DELETE_EVENT_FAILED, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, GET_ALL_CONTENT_FAILED, GET_ALL_CONTENT_REQUEST, GET_ALL_CONTENT_SUCCESS, GET_CONTENT_CATEGORY_FAILED, GET_CONTENT_CATEGORY_REQUEST, GET_CONTENT_CATEGORY_SUCCESS, GET_CONTENT_FAILED, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, UPDATE_CONTENT_FAILED, UPDATE_CONTENT_REQUEST, UPDATE_CONTENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from '../constant';

export const fetchContent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/content/`,
        // {
        //   headers: { Authorization: `Bearer ${access}` },
        // }
      );  
      dispatch({
        type: GET_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchAllContent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_CONTENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/all-content/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_ALL_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchContentPlatform = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTENT_CATEGORY_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/populer-content/`,
        // {
        //   headers: { Authorization: `Bearer ${access}` },
        // }
      );  
      dispatch({
        type: GET_CONTENT_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTENT_CATEGORY_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const createContent = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CONTENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/content/`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const updateContent = (eventId, formData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CONTENT_REQUEST });
  
      // const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.put(
        `${apiurl}/api/user/content/${eventId}`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: UPDATE_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const deleteContent = (eventId) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CONTENT_REQUEST });
  
      //   const access = JSON.parse(localStorage.getItem("access"));
  
      await axios.delete(
        `${apiurl}/api/user/content/${eventId}`
        // { headers: { Authorization: `Bearer ${access}` } }
      );
  
      dispatch({
        type: DELETE_CONTENT_SUCCESS,
        payload: eventId, // You might want to pass the eventId to update the state accordingly after deletion
      });
    } catch (error) {
      dispatch({
        type: DELETE_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  