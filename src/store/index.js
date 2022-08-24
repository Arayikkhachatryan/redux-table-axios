import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/table.slice";


export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    }
})