import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/contact` }),
    tagTypes: ["contact"],
    endpoints: (builder) => {
        return {
            getAllContacts: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["contact"]
            }),
            submitContactForm: builder.mutation({
                query: userData => {
                    return {
                        url: "/add",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["contact"]
            }),

        }
    }
})

export const {
    useGetAllContactsQuery,
    useSubmitContactFormMutation
} = contactApi
