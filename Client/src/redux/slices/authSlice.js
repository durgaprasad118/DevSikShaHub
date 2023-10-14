import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logOut: (state, action) => {
      state.userInfo = action.payload
      localStorage.removeItem('userInfo')
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
