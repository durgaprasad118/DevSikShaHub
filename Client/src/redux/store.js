import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coursesApi } from './slices/courseApiSlice'
import { userApiSlice } from './api/userApi'
import authReducer from './slices/authSlice'
import { adminCourseSlice } from './api/adminApi'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [adminCourseSlice.reducerPath]: adminCourseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coursesApi.middleware,
      userApiSlice.middleware,
      adminCourseSlice.middleware,
    ),
})

setupListeners(store.dispatch)
