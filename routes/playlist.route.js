const express = require('express');
const router = express.Router();
const verify = require("../middlewares/verifyToken")
const Playlist = require("../models/playlist.model")

router.get('/', verify, async (req, res) => {

  try {
    const videos = await Playlist.find({ user: req.user._id })
    res.json(videos)
    
  } catch (err) {
    console.log("err", err)
  }

});


router.post('/', verify, async (req, res) => {
  console.log(req.body)

  const addVid = req.body
  console.log(addVid)
  const newVideo = new Playlist(
    {

      ...addVid,
      user: req.user._id

    }
  )

  try {
    const vidData = await newVideo.save({ user: req.user._id });
    res.json(vidData);
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }

})

router.delete("/:itemId", verify ,async (req, res) => {
   try {
      const removeItem = await Playlist.remove({ _id: req.params.itemId , user: req.user._id});

      const newVid = await Playlist.find({ _id: req.params.itemId , user: req.user._id});
      res.json(newVid);

     
   } catch (err) {
      res.json({ message: err });
   }
});

router.post("/delete", verify, async (req, res) => {
  try {
    let { playlistId, videoId } = req.body
    const playlist = await Playlist.findById({ playlistId, user: req.user._id })

    console.log(playlist, "playlist")


    let newdata = { ...playlist, videos: playlist.videos.filter((item) => item._id !== videoId) }


    let data = extend(playlist, newdata);

    const savedData = await data.save()

    console.log(savedData)

    res.json(savedData)
  } catch (err) {
    res.json(err);
    console.log(err)

  }
})


router.post("/update/:vidId", verify, async (req, res) => {
  try {
    const playlist = await Playlist.findById({ user: req.user._id, _id: req.params.vidId });


    const oldVids = playlist.videos


    const newVid = [...oldVids, req.body.video]


    const savedPlaylist = await Playlist.updateOne({
      user: req.user._id, _id: req.params.vidId

    }, {
        $set: { videos: newVid }
      })


    const getPlaylist = await Playlist.findById({ user: req.user._id, _id: req.params.vidId });


    res.json(getPlaylist);
  } catch (err) {
    res.json({ message: err });
    console.log(err)

  }
})

// { "$push": { "ids": { "$each": [5,6,7,8] }}}

module.exports = router