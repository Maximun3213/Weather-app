import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./controller/app/appSlice";

export const store = configureStore({
    reducer: {
        app: appSlice
    }
})