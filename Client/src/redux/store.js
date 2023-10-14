import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coursesApi } from './slices/courseApiSlice'
import { userApiSlice } from './api/userApi'
import authReducer from "./slices/authSlice"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [userApiSlice.reducerPath]:userApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware,userApiSlice.middleware),
})

setupListeners(store.dispatch)
