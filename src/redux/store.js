import { authReducer } from "./reducer/authReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { eventReducer } from "./reducer/eventReducer";
import { contentReducer } from "./reducer/contentReducer";
import { sponsorReducer } from "./reducer/sponsorReducer";


const reducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    content: contentReducer,
    sponsor: sponsorReducer
})

const userInfoFromStorage = localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null;
const initalState = {auth: {userDetails: userInfoFromStorage}}

const store = configureStore({
    reducer,
    preloadedState: initalState
  });
  
  export default store;