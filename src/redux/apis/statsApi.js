import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const statsApi = createApi({
    reducerPath: "statsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/stats` }),
    tagTypes: ["stats"],
    endpoints: (builder) => {
        return {
            getDashboardStats: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["stats"]
            }),

        }
    }
})

export const { useGetDashboardStatsQuery } = statsApi
