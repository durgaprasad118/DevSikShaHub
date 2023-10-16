import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminCourseSlice = createApi({
  reducerPath: 'adminCourse',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['AdminCourses'],
  endpoints: (builder) => ({
    adminCourses: builder.query({
      query: (body) => `course/${body}`,
    }),
    particularCourse: builder.query({
      query: (body) => `course/getCourse/${body}`,
    }),
  }),
})

export const { useAdminCoursesQuery, useParticularCourseQuery } = adminCourseSlice
