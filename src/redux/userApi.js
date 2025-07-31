import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/user` }),
    tagTypes: ["email"],
    endpoints: (builder) => {
        return {
            emailSendByUser: builder.mutation({
                query: (userData) => {
                    return {
                        url: "/contact",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["email"]
            }),


            getAllUser: builder.query({
                query: (userData) => {
                    return {
                        url: "/user-contact",
                        method: "GET",
                    }
                },
                providesTags: ["email"],
                transformResponse: data => data.result
            }),

        }
    }
})

export const { useEmailSendByUserMutation, useGetAllUserQuery } = userApi
