import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../thunks/fetchVideos";

export const videosSlice = createSlice({
    name: 'video',
    initialState: {
        data: { totalResults: 0, videosList: [] },
        isLoading: false,
        error: null
    },
    reducers: {
        reset(state, action) {
            state.data = {};
            state.isLoading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})