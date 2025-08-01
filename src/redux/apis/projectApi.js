import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/project` }),
    tagTypes: ["project"],
    endpoints: (builder) => {
        return {
            getAllProjects: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["project"]
            }),
            addProject: builder.mutation({
                query: projectData => {
                    return {
                        url: "/add",
                        method: "POST",
                        body: projectData
                    }
                },
                invalidatesTags: ["project"]
            }),

            deleteProject: builder.mutation({
                query: id => {
                    return {
                        url: `/delete/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["project"]
            }),

            updateProject: builder.mutation({
                query: ({ id, body }) => {
                    return {
                        url: `/update/${id}`,
                        method: "PUT",
                        body
                    }
                },
                invalidatesTags: ["project"]
            }),

        }
    }
})

export const {
    useGetAllProjectsQuery,
    useAddProjectMutation,
    useDeleteProjectMutation,
    useUpdateProjectMutation
} = projectApi
