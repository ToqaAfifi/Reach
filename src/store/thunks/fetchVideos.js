import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk('videos/fetch', async (searchTerm) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`, {
        params: {
            part: "snippet",
            channelType: "any",
            maxResults: 20,
            order: "relevance",
            type: "video",
            q: searchTerm
        }
    });

    let data = {};
    data.totalResults = response.data.pageInfo.totalResults;
    data.videosList = [];

    const idsArray = [];

    response.data.items.forEach(video => {
        const videoData = {
            id: video.id.videoId,
            channelId: video.snippet.channelId,
            channelTitle: video.snippet.channelTitle,
            description: video.snippet.description,
            liveBroadcastContent: video.snippet.liveBroadcastContent,
            publishTime: video.snippet.publishTime,
            thumbnail: video.snippet.thumbnails.medium,
            title: video.snippet.title,
        };

        data.videosList.push(videoData);
        idsArray.push(videoData.id);
    });

    const videosIds = idsArray.toString();
    const allViewsCount = await fetchViewCount(videosIds);
    
    data.videosList.forEach(x => {
        const z = allViewsCount.find(y => y.id === x.id);
        x.viewCount = z.viewCount;
    });

    return data;
})

const fetchViewCount = async (ids) => {
    
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}`, {
        params: {
            part: "statistics",
            id: ids,
        }
    });

    let videos = [];

    response.data.items.forEach(video => {

        const videoStats = {
            id: video.id,
            viewCount: video.statistics.viewCount,
        };

        videos.push(videoStats);
    });

    return videos;
}