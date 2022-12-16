const multer = require('multer')  
const multerS3 = require('multer-s3')            
const AWS = require('aws-sdk') 
require("dotenv/config") 

const s3 = new AWS.S3({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,            
  secretAccessKey:process.env.AWS_SECRET_KEY,
  region: "us-west-2"
})

const filefilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' ||  file.mimetype === 'image/png') {
      cb(null, true)
  } else {
      cb(new Error("Invalid photo type"), false)
  }
}

const upload = multer({ 
  filefilter,
  storage: multerS3({
    acl:"public-read-write",
    s3,                
    bucket: process.env.AWS_BUCKET_NAME,      
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname})
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}` + "-" + file.originalname )
    }                            
  })
});

module.exports = upload;