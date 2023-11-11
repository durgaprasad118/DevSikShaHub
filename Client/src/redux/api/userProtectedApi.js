import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userSlice = createApi({
  reducerPath: 'userSlive',
  tagTypes: ['userDetails'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dsh-nrlt.onrender.com',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: `user/profileUpdate`,
        method: 'PUT',
        body: data,
      }),
    }),
  
  deleteUser: builder.mutation({
    query: (data) => ({
      url: `user/deleteprofile/${data}`,
      method: 'DELETE',
    }),
  }),
  getUserName: builder.query({
    query: (body) => `user/userName/${body}`,
    providesTags: ['name'],
  }),
})
})
export const {
useUpdateUserDetailsMutation,
useDeleteUserMutation,
useGetUserNameQuery
} = userSlice
