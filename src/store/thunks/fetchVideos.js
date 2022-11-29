import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk('videos/fetch', async (searchTerm) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?query=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`);
    console.log(response.data);
    return response.data;
})