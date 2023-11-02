import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const adminCourseSlice = createApi({
  reducerPath: 'adminCourse',
  tagTypes: ['Courses'],
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
      providesTags: ['Courses'],
    }),
    particularCourse: builder.query({
      query: (body) => `course/getCourse/${body}`,
      providesTags: ['particularCourse'],
    }),
    getAllCourses: builder.query({
      query: () => 'course/available',
      providesTags: ['Allcourses'],
    }),
    updateAdminDetails: builder.mutation({
      query: (data) => ({
        url: `admin/profileUpdate`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Courses', 'Allcourses', 'name'],
    }),

    addCourse: builder.mutation({
      query: (data) => ({
        url: `course/createCourse`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Courses', 'Allcourses', 'name'],
    }),
    editCourse: builder.mutation({
      query: (data) => ({
        url: `course/updateCourse/${data.courseId}`,
        method: 'PUT',
        body: data.formData,
      }),
      invalidatesTags: ['Courses', 'Allcourses', 'particularCourse', 'name'],
    }),
    deleteCourse: builder.mutation({
      query: (data) => ({
        url: `course/deleteCourse/${data}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Courses', 'Allcourses', 'name'],
    }),
    getAdminName: builder.query({
      query: (body) => `admin/adminName/${body}`,
      providesTags: ['name'],
    }),
  }),
})

export const {
  useAdminCoursesQuery,
  useParticularCourseQuery,
  useGetAllCoursesQuery,
  useUpdateAdminDetailsMutation,
  useAddCourseMutation,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useGetAdminNameQuery,
} = adminCourseSlice
