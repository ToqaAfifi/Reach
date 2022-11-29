import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "./slices/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosSlice.reducer
    }
})

export const videosActions = videosSlice.actions;
