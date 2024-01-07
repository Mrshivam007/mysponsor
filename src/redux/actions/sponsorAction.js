import axios from 'axios';
import apiurl from '../../constant/config';
import { CREATE_FAVORITE_SPONSOR_FAILED, CREATE_FAVORITE_SPONSOR_REQUEST, CREATE_FAVORITE_SPONSOR_SUCCESS, CREATE_SPONSOR_CONTENT_FAILED, CREATE_SPONSOR_CONTENT_REQUEST, CREATE_SPONSOR_CONTENT_SUCCESS, CREATE_SPONSOR_FAILED, CREATE_SPONSOR_REQUEST, CREATE_SPONSOR_SUCCESS, DELETE_EVENT_FAILED, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_FAVORITE_EVENT_FAILED, GET_FAVORITE_EVENT_REQUEST, GET_FAVORITE_EVENT_SUCCESS, GET_SPONSORED_CONTANT_FAILED, GET_SPONSORED_CONTANT_REQUEST, GET_SPONSORED_CONTANT_SUCCESS, GET_SPONSORED_EVENT_FAILED, GET_SPONSORED_EVENT_REQUEST, GET_SPONSORED_EVENT_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from '../constant';


  export const createSponsor = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_SPONSOR_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/sponsor/`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_SPONSOR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SPONSOR_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const createFavoriteSponsor = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_FAVORITE_SPONSOR_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/favorite-event/`,
        formData,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_FAVORITE_SPONSOR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_FAVORITE_SPONSOR_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const updateFavoriteSponsor = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_FAVORITE_SPONSOR_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.put(
        `${apiurl}/api/user/favorite-event/${formData.event_id}`,
        formData,
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);      
      dispatch({
        type: CREATE_FAVORITE_SPONSOR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_FAVORITE_SPONSOR_FAILED,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    
    }
  };

  export const fetchFavoriteEvent = () => async (dispatch) => {
    try {
      dispatch({ type: GET_FAVORITE_EVENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/favorite-event/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_FAVORITE_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FAVORITE_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const createContent = (formData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_SPONSOR_CONTENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/content-sponsor/`,
        formData,
        // { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CREATE_SPONSOR_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_SPONSOR_CONTENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const fetchSponsoredEvent = (sponsor_id) => async (dispatch) => {
    try {
      dispatch({ type: GET_SPONSORED_EVENT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/sponsor/${sponsor_id}`,
        // {
        //   headers: { Authorization: `Bearer ${access}` },
        // }
      );  
      dispatch({
        type: GET_SPONSORED_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SPONSORED_EVENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const fetchSponsoredContent = (sponsor_id) => async (dispatch) => {
    try {
      dispatch({ type: GET_SPONSORED_CONTANT_REQUEST });
  
    //   const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/content-sponsor/${sponsor_id}`,
        // {
        //   headers: { Authorization: `Bearer ${access}` },
        // }
      );  
      dispatch({
        type: GET_SPONSORED_CONTANT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SPONSORED_CONTANT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  