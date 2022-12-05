const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Image = mongoose.model('Image');

const multer = require('multer')              
const Aws = require('aws-sdk') 
require("dotenv/config") 

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
  })
  const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' ||  file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
  }
  
  const upload = multer({ storage: storage, fileFilter: filefilter });
  
  
  router.post('/:userId/upload', upload.single("photo"),async (req,res, next) => {
    
      const s3 = new Aws.S3({
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,          
        secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET       
      })
    const params = {
      Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
      Key:req.file.title,               // Name of the image
      Body:req.file.buffer,                    // Body which will contain the image in buffer format
      ACL:"public-read-write",                 // defining the permissions to get the public link
      ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
  };
  s3.upload(params,(error,data)=>{
    if(error){
        res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
    }
})})
  

module.exports = router;