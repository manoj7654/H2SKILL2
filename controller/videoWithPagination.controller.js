// video model for seraching video
const { YouTubeVidoeModel } = require('../models/youTubeVideo.model');


// <finding video with pagination
const videoWithPage=async(req,res)=>{
    try {
        // finding page form query
        const page = parseInt(req.query.page) || 1;


        // finding limit from query
        const limit = parseInt(req.query.limit) || 10;

    
        // <finding total count of video
        const totalCount = await YouTubeVidoeModel.countDocuments();
        

        // finding total page of the video
        const totalPages = Math.ceil(totalCount / limit);

    
        // here getting sorting ,limit and paginated video
        const videos = await YouTubeVidoeModel.find().sort({ publishedAt: -1 }).skip((page - 1) * limit).limit(limit);
    
        res.status(200).json({
          data: videos,
          currentPage: page,
          totalPages: totalPages,
        });
      } catch (error) {
        console.error('Error retrieving videos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

// exporting videoWithPage
module.exports={
    videoWithPage
}