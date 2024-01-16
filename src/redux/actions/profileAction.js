import axios from 'axios';
import apiurl from '../../constant/config';
import { CREATE_CONTENT_PROFILE_FAILED, CREATE_CONTENT_PROFILE_REQUEST, CREATE_CONTENT_PROFILE_SUCCESS, CREATE_EVENT_PROFILE_FAILED, CREATE_EVENT_PROFILE_REQUEST, CREATE_EVENT_PROFILE_SUCCESS, CREATE_SPONSOR_PROFILE_FAILED, CREATE_SPONSOR_PROFILE_REQUEST, CREATE_SPONSOR_PROFILE_SUCCESS, GET_CONTENT_PROFILE_FAILED, GET_CONTENT_PROFILE_REQUEST, GET_CONTENT_PROFILE_SUCCESS, GET_EVENT_PROFILE_FAILED, GET_EVENT_PROFILE_REQUEST, GET_EVENT_PROFILE_SUCCESS, GET_SPONSOR_PROFILE_FAILED, GET_SPONSOR_PROFILE_REQUEST, GET_SPONSOR_PROFILE_SUCCESS } from '../constant';

export const getSponsorProfile = () => async (dispatch) => {
    try {
      dispatch({ type: GET_SPONSOR_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/sponsor-profile/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_SPONSOR_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SPONSOR_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getEventProfile = () => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/event-profile/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_EVENT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EVENT_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
export const getContentProfile = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTENT_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/content-profile/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_CONTENT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTENT_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const createSponsorProfile = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_SPONSOR_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/sponsor-profile/`,
        formData,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_SPONSOR_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SPONSOR_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const createEventProfile = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_EVENT_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/event-profile/`,
        formData,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_EVENT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_EVENT_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const createContentProfile = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CONTENT_PROFILE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/content-profile/`,
        formData,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_CONTENT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CONTENT_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };