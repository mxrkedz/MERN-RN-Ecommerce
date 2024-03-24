import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";


export const store = configureStore({
    reducer: {
        user:userReducer
    },
  });

export const server = "https://mobileproj-server.onrender.com/api/v1"