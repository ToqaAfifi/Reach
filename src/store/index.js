import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "./slices/videosSlice";
import { loadingBarReducer } from 'react-redux-loading-bar'

export const store = configureStore({
    reducer: {
        videos: videosSlice.reducer,
        loadingBar: loadingBarReducer,
    }
})
