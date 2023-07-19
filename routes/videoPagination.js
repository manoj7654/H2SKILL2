// importing express for creating team router
const express = require("express")
const videoWithPagination = express.Router()


// importing videoWithpage for making request
const {videoWithPage}=require("../controller/videoWithPagination.controller")


// here making request for video with pagination
videoWithPagination.get("/pageVideo",videoWithPage)


// exporting videoWithPagination
module.exports={
    videoWithPagination
}