import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { adminApi } from "./adminApi";


const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: def => [...def(), userApi.middleware, adminApi.middleware]
})

export default reduxStore