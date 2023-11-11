import { createSlice } from '@reduxjs/toolkit'
const cartLength = createSlice({
  name: 'cartlength',
  initialState: {
    cartLength:0 
  },
  reducers: {
    setcartLength: (state, action) => {
      state.cartLength = action.payload+ state.cartLength
    },
    resetLength:(state,action)=>{
      state.cartLength= 0;
    }
  },
})
export const { setcartLength ,resetLength} = cartLength.actions
export default cartLength.reducer

