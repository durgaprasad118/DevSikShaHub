import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userFirstApiSlice = createApi({
  reducerPath: 'userarpi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
  }),
  tagTypes: ['UUser'],
  endpoints: (builder) => ({
    userlogin: builder.mutation({
      query: (data) => ({
        url: `user/login`,
        method: 'POST',
        body: data,
      }),
    }),
    userregister: builder.mutation({
      query: (data) => ({
        url: `user/register`,
        method: 'POST',
        body: data,
      }),
    }),
    
  }),
})
export const {useUserloginMutation,useUserregisterMutation } = userFirstApiSlice
