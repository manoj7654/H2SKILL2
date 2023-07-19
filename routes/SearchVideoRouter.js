// importing express for creating team router
const express = require("express")
const SearchVideoByTitleOrDescription = express.Router()


// importing serchvideo for searching
const {searchVideo}=require("../controller/search.controller")


// making searching request here
SearchVideoByTitleOrDescription.get("/searchVideo",searchVideo)


// exporting search video
module.exports={
    SearchVideoByTitleOrDescription
}