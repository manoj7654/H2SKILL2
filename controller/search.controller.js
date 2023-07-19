// video model for seraching video
const {YouTubeVidoeModel}=require("../models/youTubeVideo.model")


// Basic search API to search stored videos by title and description
const searchVideo=async(req,res)=>{
    try {

        // this query for search
        const query = req.query.q;

    
        // finding video by title or description
        const videos = await YouTubeVidoeModel.find({
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
          ],
        });
        
    
        res.status(200).json(videos);
      } catch (error) {
        console.error('Error searching videos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

// exporting searchvideo
module.exports = {searchVideo};