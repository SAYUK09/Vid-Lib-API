const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({ 
  thumbnail: String,
  title:String,
  videoURL : String,
  description : String,
  category: String,
  channel: String,
  runtime : {mins : Number, sec:Number}
    
})


const Video = mongoose.model("Product", VideoSchema)

module.exports = Video
