import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userCart = createApi({
    reducerPath:'userCart',
    tagTypes:['userCart'],
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
  endpoints:(builder)=>({
    addToCart:builder.mutation({
        query:(data)=>({
            url:`user/addtocart/${data}`,
            method:'POST',
        }),
        invalidatesTags:['cart']
    }),
    getCart:builder.query({
        query:(body)=>`user/cart`,
        providesTags:['cart']
    }),
    deleteItem:builder.mutation({
        query:(data)=>({
            url:`user/deletecartcourses/${data}`,
            method:'DELETE',
        }),
        invalidatesTags:['cart']
    }),
    emptyCart:builder.mutation({
       query:(data)=>({
        url: 'user/emptycart',
        method:'DELETE'
       }) ,
       invalidatesTags:['cart']
    }),
    EnrollCourse:builder.mutation({
        query:(data)=>({
            url:'user/enrollCourse',
            method:'POST',
        }),
        invalidatesTags:['EnrolledCourses']
    }),
    getEnrolledCourses:builder.query({
        query:(body)=>'user/enrolledCourses',
        providesTags:['EnrolledCourses']
    }),
    getParticularCourse:builder.query({
        query:(body)=> `user/particularCourse/${body}`
    })
  })
})
export const {useAddToCartMutation,useGetCartQuery,useDeleteItemMutation,useEmptyCartMutation,useEnrollCourseMutation,useGetEnrolledCoursesQuery,useGetParticularCourseQuery} = userCart