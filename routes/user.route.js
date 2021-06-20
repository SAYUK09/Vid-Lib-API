const express = require('express');
const router = express.Router();
const User = require("../models/user.model")

router.get('/:userId', async (req, res) => {

  console.log("trala")
  try {
    const user = await User.findById(req.params.userId).populate('LikedVideo')
    res.json(user)
  } catch (err) {
    console.log("err", err)
  }

});


router.post('/addLikedVideo/:userId', async (req, res) => {
  console.log("likkkkke")

  console.log(req.body)

  const addVideo = req.body



  try {
    // const updatedVid = await User.updateOne({ _id: req.params.userId}, {
    //   $set: { likedVideos: req.body }
    // })

    const userData = await User.findById(req.params.userId).populate('LikedVideo')

    const resss = userData.likedVideos = new User(
      {
        ...newLikedVideo,
        // user: req.user._id
      })
  }catch(err){
    console.log(err)
  }

  
})





module.exports = router