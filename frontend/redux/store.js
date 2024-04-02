import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { reviewReducer } from "./reducers/reviewReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    product: productReducer,
    cart: cartReducer,
    review: reviewReducer,
  },
});

export const server = "https://mobileproj-server.onrender.com/api/v1";

// Tenda Wifi
// export const server = "http://192.168.0.111:5000/api/v1";

// LAN
// export const server = "http://192.168.100.4:5000/api/v1";

// Cleto Hotspot
// export const server = "http://192.168.86.165:5000/api/v1";
