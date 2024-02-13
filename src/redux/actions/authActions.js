import axios from 'axios';
import apiurl from '../../constant/config';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS, GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GOOGLE_AUTH_LOGIN_FAILED, GOOGLE_AUTH_LOGIN_REQUEST, GOOGLE_AUTH_LOGIN_SUCCESS } from '../constant';



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
        console.log("Action data",data);
    } catch (error) {
        dispatch({
            type: AUTH_LOGIN_FAILED,
            payload:
                error.response.data.errors,
        });
        console.log("Aciton error",error );
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

                var payload = "";
                if (data.is_approve) {
                    payload = getPayload(data);
                    setToken(data.tokens);
                }

                dispatch({
                    type: AUTH_SIGNUP_SUCCESS,
                    payload: payload,
                });
            } catch (error) {
                dispatch({
                    type: AUTH_SIGNUP_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
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
      console.log("Google login payload ",payload);
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
    localStorage.setItem("userDetails", JSON.stringify(payload));
    return payload;
};

const setToken = (data) => {
    localStorage.setItem("access", JSON.stringify(data.access));
    localStorage.setItem("refresh", JSON.stringify(data.refresh));
};
