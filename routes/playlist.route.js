const express = require('express');
const router = express.Router();

const Playlist = require("../models/playlist.model")

router.get('/', async(req ,res)=>{

  try{
    const prd = await Playlist.find()
    res.json(prd)
  }catch(err){
    console.log("err", err)
  }

});


router.post('/', async (req, res)=>{
  console.log(req.body)

  const addVid = req.body
    const newVideo = new Playlist(
      addVid
      
    )
  
    try {
      const vidData = await newVideo.save();
      res.json(vidData);
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }

})


router.patch('/:vidId', async(req, res)=>{
  try{
    const updatedPrd = await Playlist.findOneAndUpdate({_id : req.params.vidId}, {
      // $set:{videos:req.body.videos}
      {$push :{ vidID:{$each:[1,2,]}}}
    })

    const newVid = await Playlist.find();
    res.json(newVid);
    console.log(newVid)

  }catch(err){
    
    res.json({message:err})
    console.log(err)
  }
})

// { "$push": { "ids": { "$each": [5,6,7,8] }}}

module.exports = router