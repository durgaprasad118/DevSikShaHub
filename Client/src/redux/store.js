import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApiSlice } from './api/userApi'
import authReducer from './slices/authSlice'
import roleReducer from './slices/role'
import { adminCourseSlice } from './api/adminApi'
import { userFirstApiSlice } from './api/userFirst'
import { userCart } from './Cart/Usercart'
import { userSlice } from './api/userProtectedApi'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [adminCourseSlice.reducerPath]: adminCourseSlice.reducer,
    [userFirstApiSlice.reducerPath]:userFirstApiSlice.reducer,
    [userSlice.reducerPath]:userSlice.reducer,
    [userCart.reducerPath]:userCart.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApiSlice.middleware,
      userFirstApiSlice.middleware,
      adminCourseSlice.middleware,
      userSlice.middleware,
      userCart.middleware
    ),
})

setupListeners(store.dispatch)
