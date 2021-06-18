const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv")
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

const vidRoute = require("./routes/videos.route")
 
const likedVidRoute = require("./routes/likedVideos.route")

const watchLaterRoute = require("./routes/watchLater.route")

const playlistRoute = require("./routes/playlist.route")


const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.DB_VIDEO_LIB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("server connected");
  } catch (error) {
    console.log(error);
  }
};
dbconnection()



app.get('/',(req, res)=>{
  res.send("HOMEEEE")
})

app.use("/videos", vidRoute)
app.use("/likedvideos", likedVidRoute)
app.use("/watchlater", watchLaterRoute)
app.use("/playlist", playlistRoute)


app.listen(3000, ()=>{
  console.log("Server Connected")
})