import { createSlice } from '@reduxjs/toolkit'
const Role = createSlice({
  name: 'role',
  initialState: {
    role: "admin",
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload
    },
  },
})
export const { setRole } = Role.actions
export default Role.reducer
