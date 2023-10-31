import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApiSlice } from "./api/userApi";
import authReducer from "./slices/authSlice";
import { adminCourseSlice } from "./api/adminApi";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [adminCourseSlice.reducerPath]: adminCourseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApiSlice.middleware,
      adminCourseSlice.middleware
    ),
});

setupListeners(store.dispatch);
