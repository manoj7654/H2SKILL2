// importing google api for making request
const { google } = require('googleapis');

//  YoutTubeVideoModal for fetching updated video
const { YouTubeVidoeModel } = require('../models/youTubeVideo.model');

// dotenv for accessing data form env file
require("dotenv").config()


// YouTube Data API setup
const youtubeApi = google.youtube('v3');
const apiKeys = [process.env.youtube_api_key1,process.env.youtube_api_key2];
let currentApiKeyIndex = 0;

// fetching updated video
async function updatedVideoList() {
  try {
    const searchQuery = 'movies';
    const response = await youtubeApi.search.list({
      key: apiKeys[currentApiKeyIndex],
      part: 'snippet',
      q: searchQuery,
      type: 'video',
      order: 'date',
      publishedAfter: '2023-07-01T00:00:00Z'
    });


    const videos = response.data.items.map(item => ({
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails,
    }));
    

    // adding video in the collection
    await YouTubeVidoeModel.insertMany(videos);
  }  catch (error) {
    console.error('Error fetching latest videos:', error);

    // If the error is due to quota exhaustion, switch to the next API key
    if (error.errors[0].reason === 'quotaExceeded') {
      currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
      console.log('Switched to the next API key:', apiKeys[currentApiKeyIndex]);
    }
  }
}


// exporting updateVideoList
module.exports = {updatedVideoList};