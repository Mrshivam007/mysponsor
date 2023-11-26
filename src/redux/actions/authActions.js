import axios from 'axios';
import apiurl from '../../constant/config';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_REQUEST, AUTH_SIGNUP_SUCCESS } from '../constant';



export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST });

        const { data } = await axios.post(`${apiurl}/api/user/login`, {
            email,
            password,
        });

        const payload = getPayload(data.user);
        setToken(data.token);

        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: payload,
        });
    } catch (error) {
        dispatch({
            type: AUTH_LOGIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signup =
    (
        email,
        password,
        firstname,
        lastname,
        subject,
        confirmPassword,
        userProfile
    ) =>
        async (dispatch) => {
            try {
                dispatch({ type: AUTH_SIGNUP_REQUEST });

                const { data } = await axios.post(
                    `${apiurl}/api/user/register`,
                    {
                        email,
                        first_name: firstname,
                        last_name: lastname,
                        subject: subject,
                        password,
                        confirm_password: confirmPassword,
                        user_profile: userProfile,
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

const getPayload = (data) => {
    const payload = {
        isStaff: data.is_staff,
        userProfile: data.user_profile,
        email: data.email,
        firstname: data.first_name,
        lastname: data.last_name,
        user_id: data.user_id,
    };
    localStorage.setItem("userDetails", JSON.stringify(payload));
    return payload;
};

const setToken = (data) => {
    localStorage.setItem("access", JSON.stringify(data.access));
    localStorage.setItem("refresh", JSON.stringify(data.refresh));
};
