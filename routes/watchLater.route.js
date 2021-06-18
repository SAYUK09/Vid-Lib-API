const express = require('express');
const router = express.Router();

const WatchLaterVideo = require("../models/watchLater.model")

router.get('/', async(req ,res)=>{

  try{
    const vid = await WatchLaterVideo.find()
    res.json(vid)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addVid = req.body
    const newVideo = new WatchLaterVideo(
      addVid
      
    )
  
    try {
      const vidData = await newVideo.save();
      res.json(vidData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})

router.delete('/:vidId', async(req, res)=>{
  try{
    const removedPrd = await WatchLaterVideo.remove({_id:req.params.vidId})
    
    const newVid = await WatchLaterVideo.find();
    res.json(newVid);
    
  }
  
  catch(err){
    res.json({message:err})
    console.log(err)
  }
  
})

module.exports = router
