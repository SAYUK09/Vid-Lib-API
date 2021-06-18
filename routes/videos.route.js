const express = require('express');
const router = express.Router();

const Video = require("../models/videos.model")

router.get('/', async(req ,res)=>{

  try{
    const prd = await Video.find()
    res.json(prd)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addVid = req.body
    const newVideo = new Video(
      addVid
      
    )
  
    try {
      const vidData = await newVideo.save();
      res.json(vidData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})


module.exports = router