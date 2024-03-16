import axios from 'axios';
import apiurl from "../../constant/config";
import { GET_ALL_CREATOR_FAILED, GET_ALL_CREATOR_REQUEST, GET_ALL_CREATOR_SUCCESS, GET_CREATOR_BY_ID_FAILED, GET_CREATOR_BY_ID_REQUEST, GET_CREATOR_BY_ID_SUCCESS } from '../constant';

export const fetchAllCreator = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_CREATOR_REQUEST });

        const { data } = await axios.get(
            `${apiurl}/api/user/all-content-profile/`,
        );
        dispatch({
            type: GET_ALL_CREATOR_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_CREATOR_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const fetchCreatorbyId = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_CREATOR_BY_ID_REQUEST });


        const { data } = await axios.get(
            `${apiurl}/api/user/all-content-profile/${id}`,

        );
        dispatch({
            type: GET_CREATOR_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CREATOR_BY_ID_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};