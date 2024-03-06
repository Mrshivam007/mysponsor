import axios from 'axios';
import apiurl from '../../constant/config';
import { COMPLETE_EVENT_PAYMENT_FAILED, COMPLETE_EVENT_PAYMENT_REQUEST, COMPLETE_EVENT_PAYMENT_SUCCESS, CREATE_FAVORITE_SPONSOR_FAILED, CREATE_FAVORITE_SPONSOR_REQUEST, CREATE_FAVORITE_SPONSOR_SUCCESS, CREATE_SPONSORING_ITEM_FAILED, CREATE_SPONSORING_ITEM_REQUEST, CREATE_SPONSORING_ITEM_SUCCESS, CREATE_SPONSOR_CONTENT_FAILED, CREATE_SPONSOR_CONTENT_REQUEST, CREATE_SPONSOR_CONTENT_SUCCESS, CREATE_SPONSOR_FAILED, CREATE_SPONSOR_REQUEST, CREATE_SPONSOR_SUCCESS, DELETE_EVENT_FAILED, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, GET_EVENT_FAILED, GET_EVENT_REQUEST, GET_EVENT_SUCCESS, GET_FAVORITE_EVENT_FAILED, GET_FAVORITE_EVENT_REQUEST, GET_FAVORITE_EVENT_SUCCESS, GET_SPONSORED_CONTANT_FAILED, GET_SPONSORED_CONTANT_REQUEST, GET_SPONSORED_CONTANT_SUCCESS, GET_SPONSORED_CONTENT_BY_ID_FAILED, GET_SPONSORED_CONTENT_BY_ID_REQUEST, GET_SPONSORED_CONTENT_BY_ID_SUCCESS, GET_SPONSORED_EVENT_FAILED, GET_SPONSORED_EVENT_REQUEST, GET_SPONSORED_EVENT_SUCCESS, GET_SPONSORED_ITEM_FAILED, GET_SPONSORED_ITEM_REQUEST, GET_SPONSORED_ITEM_SUCCESS, UPDATE_EVENT_FAILED, UPDATE_EVENT_REQUEST, UPDATE_EVENT_SUCCESS } from '../constant';


export const createSponsor = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SPONSOR_REQUEST });

      // const access = JSON.parse(localStorage.getItem("access"));

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


export const completeEventPayment = (formData) => async (dispatch) => {
  try {
    dispatch({ type: COMPLETE_EVENT_PAYMENT_REQUEST });

    //   const access = JSON.parse(localStorage.getItem("access"));

    const { data } = await axios.post(
      `${apiurl}/api/razorpay/order/complete/`,
      formData,
      // { headers: { Authorization: `Bearer ${access}` } }
    );
    console.log(data.status);

    dispatch({
      type: COMPLETE_EVENT_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPLETE_EVENT_PAYMENT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSponsoringItem = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SPONSORING_ITEM_REQUEST });

    const access = JSON.parse(localStorage.getItem("access"));

    const sponsorId = formData.get("sponsor_id"); // Use the get method to retrieve values from FormData

    const { data } = await axios.put(
      `${apiurl}/api/user/sponsor/${sponsorId}`, // Use the retrieved sponsorId
      formData,
      { headers: { Authorization: `Bearer ${access}` } }
    );

    console.log(data.status);
    dispatch({
      type: CREATE_SPONSORING_ITEM_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: CREATE_SPONSORING_ITEM_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    });
  }
};

export const updateContentSponsoringItem = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SPONSORING_ITEM_REQUEST });

    const access = JSON.parse(localStorage.getItem("access"));

    const sponsorId = formData.get("sponsor_id"); // Use the get method to retrieve values from FormData

    const { data } = await axios.put(
      `${apiurl}/api/user/content-sponsor/${sponsorId}`, // Use the retrieved sponsorId
      formData,
      { headers: { Authorization: `Bearer ${access}` } }
    );

    console.log(data.status);
    dispatch({
      type: CREATE_SPONSORING_ITEM_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: CREATE_SPONSORING_ITEM_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data
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

export const fetchSponsoredContentById = (item_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SPONSORED_CONTENT_BY_ID_REQUEST });

      const access = JSON.parse(localStorage.getItem("access"));

    const { data } = await axios.get(
      `${apiurl}/api/user/content-sponsor/${item_id}`,
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    dispatch({
      type: GET_SPONSORED_CONTENT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SPONSORED_CONTENT_BY_ID_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const fetchSponsoredItem = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SPONSORED_ITEM_REQUEST });

      const access = JSON.parse(localStorage.getItem("access"));

    const { data } = await axios.get(
      `${apiurl}/api/user/sponsor/`,
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    dispatch({
      type: GET_SPONSORED_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SPONSORED_ITEM_FAILED,
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

