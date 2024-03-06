import axios from 'axios';
import apiurl from '../../constant/config';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, EMAIL_OTP_FAILED, EMAIL_OTP_REQUEST, EMAIL_OTP_SUCCESS, EMAIL_OTP_VERIFICATION_FAILED, EMAIL_OTP_VERIFICATION_REQUEST, EMAIL_OTP_VERIFICATION_SUCCESS, GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GOOGLE_AUTH_LOGIN_FAILED, GOOGLE_AUTH_LOGIN_REQUEST, GOOGLE_AUTH_LOGIN_SUCCESS, PASSWORD_RESET_FAILED, PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS } from '../constant';



export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    const { data } = await axios.post(`${apiurl}/api/user/login/`, {
      email,
      password,
    });

    const payload = getPayload(data.user);
    setToken(data.token);

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: payload,
    });
    console.log("Action data", data);
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAILED,
      payload:
        error.response.data.errors,
    });
    console.log("Aciton error", error);
  }
};

export const signup =
  (
    email,
    password,
    firstname,
    lastname,
    password2,
    user_type,
    // is_admin,
    // user_id,
  ) =>
    async (dispatch) => {
      try {
        dispatch({ type: AUTH_SIGNUP_REQUEST });
        console.log("using action file");

        const { data } = await axios.post(
          `${apiurl}/api/user/register/`,
          {
            email,
            first_name: firstname,
            last_name: lastname,
            password: password,
            password2: password2,
            user_type: user_type,
            // is_active: true,
            // is_admin: is_admin,
            // user_profile: user_type,
            // user_id: user_id,
          }
        );
        console.log(data);

        var payload = "";
        if (data.is_approve) {
          payload = getPayload(data);
          setToken(data.tokens);
        }
        console.log(data);

        dispatch({
          type: AUTH_SIGNUP_SUCCESS,
          payload: data,
        });
        console.log("register message inside action ", payload);
      } catch (error) {
        dispatch({
          type: AUTH_SIGNUP_FAILED,
          payload: error.response.data.errors,
            // error.response && error.response.data.errors
            //   ? error.response.data.error
            //   : error.error,
        });
        console.log("getting error in action", payload);
      }
    };
  

export const emailOtp = (email) => async (dispatch) => {

  try {
    dispatch({ type: EMAIL_OTP_REQUEST });

    const { data } = await axios.post(
      `${apiurl}/api/user/email/varification/`,
      {
        "email": email,
      }
    );

    const payload = getPayload(data.user);
    setToken(data.token);

    dispatch({
      type: EMAIL_OTP_SUCCESS,
      payload: payload,
    });
    console.log("Action data", data);
  } catch (error) {
    dispatch({
      type: EMAIL_OTP_FAILED,
      payload: error.response,
    });
    console.log("Action error", error);
  }
};

export const emailOtpVerification = (email, otp) => async (dispatch) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    dispatch({ type: EMAIL_OTP_VERIFICATION_REQUEST });

    const { data } = await axios.post(
      `${apiurl}/api/user/otp/varify/`,
      {
        "email": email,
        "otp": otp,
      },
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );

    const payload = getPayload(data.user);
    setToken(data.token);

    dispatch({
      type: EMAIL_OTP_VERIFICATION_SUCCESS,
      payload: payload,
    });
    console.log("Action data", data);
  } catch (error) {
    dispatch({
      type: EMAIL_OTP_VERIFICATION_FAILED,
      payload: error.response.data.errors,
    });
    console.log("Action error", error);
  }
};


export const passwordReset = (password, password2) => async (dispatch) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    dispatch({ type: PASSWORD_RESET_REQUEST });

    const { data } = await axios.post(
      `${apiurl}/api/user/changepassword/`,
      {
        password,
        password2,
      },
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );

    const payload = getPayload(data.user);
    setToken(data.token);

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
      payload: payload,
    });
    console.log("Action data", data);
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAILED,
      payload: error.response.data.errors,
    });
    console.log("Action error", error);
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem("userDetails");
  dispatch({ type: AUTH_LOGOUT });
};

export const googleLogin = (email, given_name, family_name) => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_AUTH_LOGIN_REQUEST });

    const { data } = await axios.post(`${apiurl}/api/user/google/`, {
      email,
      given_name,
      family_name
    });

    const payload = getPayload(data.user);
    setToken(data.token);

    dispatch({
      type: GOOGLE_AUTH_LOGIN_SUCCESS,
      payload: payload,
    });
    console.log("Google login payload ", payload);
  } catch (error) {
    dispatch({
      type: GOOGLE_AUTH_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });

    const access = JSON.parse(localStorage.getItem("access"));

    const { data } = await axios.get(`${apiurl}/api/user/profile/`, {
      headers: { Authorization: `Bearer ${access}` },
    });

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



const getPayload = (data) => {
  const payload = {
    email: data.email,
    firstname: data.first_name,
    lastname: data.last_name,
    user_type: data.user_type,
    user_id: data.user_id,
  };
  console.log("getting data ", data);
  localStorage.setItem("userDetails", JSON.stringify(payload));
  return payload;
};

const setToken = (data) => {
  localStorage.setItem("access", JSON.stringify(data.access));
  localStorage.setItem("refresh", JSON.stringify(data.refresh));
};
