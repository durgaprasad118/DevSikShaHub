import { createSlice } from '@reduxjs/toolkit'
const Role = createSlice({
  name: 'role',
  initialState: {
    role:localStorage.getItem('role') ||"admin" 
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload,
      localStorage.setItem('role',action.payload)
    },
  },
})
export const { setRole } = Role.actions
export default Role.reducer
