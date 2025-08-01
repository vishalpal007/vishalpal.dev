import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./apis/contactApi";
import { projectApi } from "./apis/projectApi";
import { statsApi } from "./apis/statsApi";


const reduxStore = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        [projectApi.reducerPath]: projectApi.reducer,
        [statsApi.reducerPath]: statsApi.reducer,
    },
    middleware: def => [
        ...def(),
        contactApi.middleware,
        projectApi.middleware,
        statsApi.middleware,
    ]
})

export default reduxStore