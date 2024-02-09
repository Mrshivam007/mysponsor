import axios from 'axios';
import apiurl from '../../constant/config';
import { APPROVE_CONTENT_PAYMENT_FAILED, APPROVE_CONTENT_PAYMENT_REQUEST, APPROVE_CONTENT_PAYMENT_SUCCESS, APPROVE_EVENT_PAYMENT_FAILED, APPROVE_EVENT_PAYMENT_REQUEST, APPROVE_EVENT_PAYMENT_SUCCESS, GET_PAYMENT_FAILED, GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS } from '../constant';

export const getPaymentDetails = () => async (dispatch) => {
    try {
      dispatch({ type: GET_PAYMENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/razorpay/payment/details/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PAYMENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const approveEventPayment = (eventId) => async (dispatch) => {
    try {
      dispatch({ type: APPROVE_EVENT_PAYMENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/razorpay/payment/details/`,
        {"sponsor_id": eventId,
        "type":"event"},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: APPROVE_EVENT_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APPROVE_EVENT_PAYMENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const approveContentPayment = (contentId) => async (dispatch) => {
    try {
      dispatch({ type: APPROVE_CONTENT_PAYMENT_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/razorpay/payment/details/`,
        {"content_sponsor_id": contentId,
        "type":"content"},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: APPROVE_CONTENT_PAYMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APPROVE_CONTENT_PAYMENT_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  
  