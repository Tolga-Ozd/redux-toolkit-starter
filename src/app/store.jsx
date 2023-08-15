import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"

export const store = configureStore({
    reducer: {
        auth:authReducer,
    },

    devTools: process.env.NODE_ENV !== "production",
//!eğer geliştirme aşaması production ise o zaman yukarıdaki ifade false döndürür ve dolayısıyla devTool kullanıma kapalı olur.
})