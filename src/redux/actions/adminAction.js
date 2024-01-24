import axios from 'axios';
import apiurl from '../../constant/config';
import { CONTENT_APPROVE_FAILED, CONTENT_APPROVE_REQUEST, CONTENT_APPROVE_SUCCESS, EVENT_APPROVE_FAILED, EVENT_APPROVE_REQUEST, EVENT_APPROVE_SUCCESS, GET_CONTENT_APPROVE_FAILED, GET_CONTENT_APPROVE_REQUEST, GET_CONTENT_APPROVE_SUCCESS, GET_EVENT_APPROVE_FAILED, GET_EVENT_APPROVE_REQUEST, GET_EVENT_APPROVE_SUCCESS } from '../constant';

export const getEventApprove = () => async (dispatch) => {
    try {
      dispatch({ type: GET_EVENT_APPROVE_REQUEST});
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/all-event/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_EVENT_APPROVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EVENT_APPROVE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getContentApprove = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTENT_APPROVE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.get(
        `${apiurl}/api/user/all-content/`,
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );  
      dispatch({
        type: GET_CONTENT_APPROVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTENT_APPROVE_FAILED,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
  };
  
  // export const approveEvent = (eventId) => async (dispatch) => {
  //   try {
  //     dispatch({ type: EVENT_APPROVE_REQUEST });
  
  //     const access = JSON.parse(localStorage.getItem("access"));
  
  //     // const { data } = await axios.post(
  //     //   `${apiurl}/api/user/event-approval/`,
  //     //   {},
  //     //   {
  //     //     headers: { Authorization: `Bearer ${access}` },
  //     //   }
  //     // );

  //     await axios.post(
  //       `${apiurl}/api/user/event-approval/`,
  //       {},
  //       { headers: { Authorization: `Bearer ${access}` } }
  //     );
  
  //     dispatch({
  //       type: EVENT_APPROVE_SUCCESS,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: EVENT_APPROVE_FAILED,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };

    export const approveEvent = (eventId) => async (dispatch) => {
    try {
      dispatch({ type: EVENT_APPROVE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/event-approval/`,
        {"event_id": eventId},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: EVENT_APPROVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EVENT_APPROVE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

    export const approveContent = (contentId) => async (dispatch) => {
    try {
      dispatch({ type: CONTENT_APPROVE_REQUEST });
  
      const access = JSON.parse(localStorage.getItem("access"));
  
      const { data } = await axios.post(
        `${apiurl}/api/user/content-approval/`,
        {"content_id": contentId},
        { headers: { Authorization: `Bearer ${access}` } }
      );
      console.log(data.status);
  
      dispatch({
        type: CONTENT_APPROVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTENT_APPROVE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  

  // export const approveContent = (contentId) => async (dispatch) => {
  //   try {
  //     dispatch({ type: CONTENT_APPROVE_REQUEST });
  
  //       const access = JSON.parse(localStorage.getItem("access"));
  
  //     await axios.post(
  //       `${apiurl}/api/user/content-approval/`,
  //       { headers: { Authorization: `Bearer ${access}` } }
  //     );
  
  //     dispatch({
  //       type: CONTENT_APPROVE_SUCCESS,
  //       payload: contentId, // You might want to pass the eventId to update the state accordingly after deletion
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: CONTENT_APPROVE_FAILED,
  //       payload:
  //         error.response && error.response.data.message
  //           ? error.response.data.message
  //           : error.message,
  //     });
  //   }
  // };
  
  // export const fetchEventbyId = (id) => async (dispatch) => {
//     try {
//       dispatch({ type: GET_EVENT_REQUEST });
  
//     //   const access = JSON.parse(localStorage.getItem("access"));
  
//       const { data } = await axios.get(
//         `${apiurl}/api/user/event/${id}`,
//         // {
//         //   headers: { Authorization: `Bearer ${access}` },
//         // }
//       );  
//       dispatch({
//         type: GET_EVENT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_EVENT_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };

//   export const fetchEventCategory = () => async (dispatch) => {
//     try {
//       dispatch({ type: GET_EVENT_CATEGORY_REQUEST });
  
//     //   const access = JSON.parse(localStorage.getItem("access"));
  
//       const { data } = await axios.get(
//         `${apiurl}/api/user/populer-event/`,
//         // {
//         //   headers: { Authorization: `Bearer ${access}` },
//         // }
//       );  
//       dispatch({
//         type: GET_EVENT_CATEGORY_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_EVENT_CATEGORY_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };



//   export const createEvent = (formData) => async (dispatch) => {
//     try {
//       dispatch({ type: CREATE_EVENT_REQUEST });
  
//     //   const access = JSON.parse(localStorage.getItem("access"));
  
//       const { data } = await axios.post(
//         `${apiurl}/api/user/event/`,
//         formData,
//         // { headers: { Authorization: `Bearer ${access}` } }
//       );
//       console.log(data.status);
  
//       dispatch({
//         type: CREATE_EVENT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: CREATE_EVENT_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };


//   export const updateEvent = (eventId, formData) => async (dispatch) => {
//     try {
//       dispatch({ type: UPDATE_EVENT_REQUEST });
  
//       // const access = JSON.parse(localStorage.getItem("access"));
  
//       const { data } = await axios.put(
//         `${apiurl}/api/user/event/${eventId}`,
//         formData,
//         // { headers: { Authorization: `Bearer ${access}` } }
//       );
//       console.log(data.status);
  
//       dispatch({
//         type: UPDATE_EVENT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_EVENT_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };




  
  