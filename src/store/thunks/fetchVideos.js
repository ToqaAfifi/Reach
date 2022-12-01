import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchVideos = createAsyncThunk('videos/fetch', async (searchTerm) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`, {
        params: {
            part: "snippet",
            channelType: "any",
            maxResults: 20,
            order: "relevance",
            type: [
                "channel",
                "video",
                "playlist"
            ],
            q: searchTerm
        }
    });

    let data = {};
    data.totalResults = response.data.pageInfo.totalResults;
    data.videosList = [];

    const idsArray = [];
    const channelIdsArray = [];

    response.data.items.forEach(video => {

        let customId;

        if (video.id.kind === "youtube#video") {
            customId = video.id.videoId;
        }
        else if (video.id.kind === "youtube#channel") {
            customId = video.id.channelId;
        }
        else {
            customId = video.id.playlistId;
        }

        const videoData = {
            id: customId,
            kind: video.id.kind,
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

        if (video.id.kind === "youtube#channel") {
            channelIdsArray.push(videoData.id);
        }
    });

    const videosIds = idsArray.toString();
    const allViewsCount = await fetchViewCount(videosIds);

    data.videosList.forEach(x => {
        const z = allViewsCount.find(y => y.id === x.id);
        if (z) x.viewCount = z.viewCount;
    });

    const channelsIds = channelIdsArray.toString();
    if(channelsIds !== ""){
        const channelDetails = await fetchChannelStats(channelsIds);
        data.videosList.forEach(x => {
            const z = channelDetails.find(y => y.id === x.id);
            if (z) {
                x.subscriberCount = z.subscriberCount;
                x.videoCount = z.videoCount;
            }
        });
    }

    return data;
})

const fetchViewCount = async (ids) => {

    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}`, {
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

const fetchChannelStats = async (channelIds) => {

    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?key=${API_KEY}`, {
        params: {
            part: "statistics",
            id: channelIds,
        }
    });

    let channels = [];

    response.data.items.forEach(channel => {

        const channelStats = {
            id: channel.id,
            subscriberCount: channel.statistics.subscriberCount,
            videoCount: channel.statistics.videoCount,
        };

        channels.push(channelStats);
    });

    return channels;
}