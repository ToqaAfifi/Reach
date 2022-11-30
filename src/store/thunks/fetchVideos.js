import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk('videos/fetch', async (searchTerm) => {
    const response = await axios.get(`htps://www.googleapis.com/youtube/v3/search?part=snippet&query=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`);

    let data = {};
    data.totalResults = response.data.pageInfo.totalResults;
    data.videosList = [];

    response.data.items.forEach(video => {
        const videoData = {
            id: video.id.videoId,
            channelId: video.snippet.channelId,
            channelTitle: video.snippet.channelTitle,
            description: video.snippet.description,
            liveBroadcastContent: video.snippet.liveBroadcastContent,
            publishTime: video.snippet.publishTime,
            publishedAt: video.snippet.publishedAt,
            thumbnail: video.snippet.thumbnails.default,
            title: video.snippet.title,
        };

        data.videosList.push(videoData);
    });

    return data;
})