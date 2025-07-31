import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    // baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/admin` }),
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/admin` }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getAllProduct: builder.query({
                query: () => {
                    return {
                        url: "/project",
                        method: "GET"
                    }
                },
                providesTags: ["admin"],
                transformResponse: data => data.result
            }),
            addProduct: builder.mutation({
                query: userData => {
                    return {
                        url: "/add-project",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),

            deleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/delete-project/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["admin"]
            }),

            updateProduct: builder.mutation({
                query: userData => {
                    return {
                        url: `/update-project/${userData._id}`,
                        method: "PUT",
                        body: userData.fd
                    }
                },
                invalidatesTags: ["admin"]
            }),

        }
    }
})

export const {
    useGetAllProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = adminApi
