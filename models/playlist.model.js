const mongoose = require("mongoose");


// const Video = require("./videos.model")
// console.log(Video, "lalallalalalala")



const PlaylistSchema = new mongoose.Schema(
  {playlist :{
  name : String , 
  videos : [{ 
  thumbnail: String,
  title:String,
  videoURL : String,
  description : String,
  category: String,
  channel: String,
  runTime : {mins : Number, sec:Number}
    
}]}

   
  
})


// const PlaylistSchema = new mongoose.Schema(
//   {playlistName : String,
//   videos : [{ 
//   thumbnail: String,
//   title:String,
//   videoURL : String,
//   description : String,
//   category: String,
//   channel: String,
//   runTime : {mins : Number, sec:Number}
    
// }]
// })


const Playlist = mongoose.model("Playlist", PlaylistSchema)

module.exports = Playlist