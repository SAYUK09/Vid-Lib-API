const mongoose = require('mongoose')

const WatchLaterSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId, ref:"User"}, 
  thumbnail: String,
  title:String,
  videoURL : String,
  description : String,
  category: String,
  channel: String,
  runTime : {mins : Number, sec:Number}
    
})


const WatchLaterVideo = mongoose.model("WatchLaterVideo", WatchLaterSchema)

module.exports = WatchLaterVideo