import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (name) => `course/${name}`,
      providesTags: ['Allc'],
    }),
  }),
})

export const { useGetCoursesQuery } = coursesApi
