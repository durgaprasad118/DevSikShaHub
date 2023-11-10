import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userCart = createApi({
    reducerPath:'userCart',
    tagTypes:['userCart'],
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
    })
  })
})
export const {useAddToCartMutation,useGetCartQuery,useDeleteItemMutation,useEmptyCartMutation} = userCart