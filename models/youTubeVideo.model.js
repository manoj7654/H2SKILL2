// requiring mongoose for making shcema and models
const mongoose = require('mongoose');


// creating shcema
const youtubevidosSchema = new mongoose.Schema({
  title: String,
  description: String,
  publishedAt: Date,
  thumbnails: Object,
});


// creating model
const YouTubeVidoeModel = mongoose.model('videos', youtubevidosSchema);


//exporting youtubevideomodel
module.exports = { YouTubeVidoeModel }