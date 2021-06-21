const express = require('express');
const router = express.Router();

const LikedVideo = require("../models/likedVideos.model")
const verify = require("../middlewares/verifyToken")
const User = require("../models/user.model")

router.get('/', verify, async (req, res) => {

  try {
    const videos = await LikedVideo.find({ user: req.user._id })
    res.json(videos)
  } catch (err) {
    console.log("err", err)
  }

});


router.post('/', verify, async (req, res) => {
  console.log(req.user._id)

  const addVid = req.body
  const newVideo = new LikedVideo(
    {
      ...addVid,
      user: req.user._id
    }

  )

  try {
    const vidData = await newVideo.save({user: req.user._id});
    res.json(vidData);
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }

})


router.delete('/:vidId', verify, async (req, res) => {

  try {

    console.log(req.params.vidId)

    const removedPrd = await LikedVideo.remove({ _id: req.params.vidId, user: req.user._id })

    const newVids = await LikedVideo.find({ user: req.user._id });
    res.json(newVids);

  }

  catch (err) {
    res.json({ message: err })
    console.log(err)
  }

})

module.exports = router