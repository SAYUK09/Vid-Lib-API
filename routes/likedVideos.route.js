const express = require('express');
const router = express.Router();

const LikedVideo = require("../models/likedVideos.model")

router.get('/', async(req ,res)=>{

  try{
    const prd = await LikedVideo.find()
    res.json(prd)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addVid = req.body
    const newVideo = new LikedVideo(
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
    const removedPrd = await LikedVideo.remove({_id:req.params.vidId})
    
    const newPrd = await LikedVideo.find();
    res.json(newPrd);
    
  }
  
  catch(err){
    res.json({message:err})
    console.log(err)
  }
  
})

module.exports = router