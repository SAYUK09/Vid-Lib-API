const mongoose = require('mongoose')

const LikedVideoSchema = new mongoose.Schema({ 
  thumbnail: String,
  title:String,
  videoURL : String,
  description : String,
  category: String,
  channel: String,
  runTime : {mins : Number, sec:Number}
    
})


const LikedVideo = mongoose.model("LikedVideo", LikedVideoSchema)

module.exports = LikedVideo