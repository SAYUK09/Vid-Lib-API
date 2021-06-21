const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema(
  {

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    videos: [{
      thumbnail: String,
      title: String,
      videoURL: String,
      description: String,
      category: String,
      channel: String,
      runTime: { mins: Number, sec: Number }

    }]



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