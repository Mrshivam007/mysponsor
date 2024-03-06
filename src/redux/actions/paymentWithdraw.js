import axios from 'axios';
import apiurl from '../../constant/config';
import {  APPROVE_WITHDRAW_FAILED, APPROVE_WITHDRAW_REQUEST, APPROVE_WITHDRAW_SUCCESS, GET_PAYMENT_WITHDRAW_FAILED, GET_PAYMENT_WITHDRAW_REQUEST, GET_PAYMENT_WITHDRAW_SUCCESS, PAYMENT_WITHDRAW_LIST_FAILED, PAYMENT_WITHDRAW_LIST_REQUEST, PAYMENT_WITHDRAW_LIST_SUCCESS } from '../constant';

  export const PaymentWithdraw = (formData) => async (dispatch) => {
    try {
      dispatch({ type: GET_PAYMENT_WITHDRAW_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/razorpay/sponsor/event/transaction/`,
        formData,
        // {"user_id": id,
        // "amount":amount},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: GET_PAYMENT_WITHDRAW_SUCCESS,
        payload: data,
      });
      console.log("Withdraw Msg ",data);
    } catch (error) {
      dispatch({
        type: GET_PAYMENT_WITHDRAW_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const ContentPaymentWithdraw = (formData) => async (dispatch) => {
    try {
      dispatch({ type: GET_PAYMENT_WITHDRAW_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/razorpay/sponsor/content/transaction/`,
        formData,
        // {"user_id": id,
        // "amount":amount},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: GET_PAYMENT_WITHDRAW_SUCCESS,
        payload: data,
      });
      console.log("Withdraw Msg ",data);
    } catch (error) {
      dispatch({
        type: GET_PAYMENT_WITHDRAW_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getPaymentWithdrawList = () => async (dispatch) => {
    try {
      dispatch({ type: PAYMENT_WITHDRAW_LIST_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/razorpay/withdra/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: PAYMENT_WITHDRAW_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PAYMENT_WITHDRAW_LIST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const ApproveWithdraw = (id) => async (dispatch) => {
    try {
      dispatch({ type: APPROVE_WITHDRAW_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.put(
        `${apiurl}/api/razorpay/sponsor/event/transaction/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: APPROVE_WITHDRAW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APPROVE_WITHDRAW_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const ApproveContentWithdraw = (id) => async (dispatch) => {
    try {
      dispatch({ type: APPROVE_WITHDRAW_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.put(
        `${apiurl}/api/razorpay/sponsor/content/transaction/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: APPROVE_WITHDRAW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: APPROVE_WITHDRAW_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  
  