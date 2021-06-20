const express = require('express');
const router = express.Router();
const verify = require("../middlewares/verifyToken")
const WatchLaterVideo = require("../models/watchLater.model")

router.get('/', verify, async (req, res) => {

  try {
    const vid = await WatchLaterVideo.find({ user: req.user._id })
    res.json(vid)
  } catch (err) {
    console.log("err", err)
  }

});


router.post('/', verify, async (req, res) => {
  console.log(req.body)

  const addVid = req.body
  const newVideo = new WatchLaterVideo(
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

router.delete('/:vidId', async (req, res) => {
  try {
    const removedPrd = await WatchLaterVideo.remove({ _id: req.params.vidId,user: req.user._id })

    const newVid = await WatchLaterVideo.find({ user: req.user._id });
    res.json(newVid);

  }

  catch (err) {
    res.json({ message: err })
    console.log(err)
  }

})

module.exports = router
