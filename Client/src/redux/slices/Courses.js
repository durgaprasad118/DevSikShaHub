import { createSlice  } from "@reduxjs/toolkit";
const AllCourses= createSlice({
    name:'AllCourses',
    initialState:{
        allcourses:[]   
    },
    reducers:{
        allourses:(state,action)=>{
            state.allcourses= action.payload;
        }
    }
})

export const {allCourses}= AllCourses.actions;

export default AllCourses.reducer;