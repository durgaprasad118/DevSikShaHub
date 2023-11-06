import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userApiSlice = createApi({
  reducerPath: 'userapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `admin/login`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `admin/register`,
        method: 'POST',
        body: data,
      }),
    }),
    
  }),
})

export const { useLoginMutation, useRegisterMutation } = userApiSlice
