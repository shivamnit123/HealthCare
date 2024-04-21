import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./userSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    alerts: alertSlice.reducer,
    user: userSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});
export default store;