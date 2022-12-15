const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Binding = mongoose.model('Binding');
const User = mongoose.model('User');
const Like = mongoose.model('Like');
const Follow = mongoose.model('Follow');
const passport = require('passport');
const aws = require('aws-sdk')
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');


const { loginUser, restoreUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.find()
    return res.json(users);
  }
  catch(err) {
      return res.json([]);
  }
});

router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    // In development, allow React server to gain access to the CSRF token
    // whenever the current user information is first loaded into the
    // React application
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  console.log(req.user)
  res.json(req.user);
});

// POST /api/users/register
router.post('/register', validateRegisterInput, async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  });

  if (user) {
    // Throw a 400 error if the email address and/or username already exists
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,

  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });
});

// POST /api/users/login
router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function(err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});

router.get('/:userId', async function (req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    console.log(user)
    return res.json(user)
  }
  catch (err) {
    return res.json([])
  }
});

router.get('/bindings/:userId', async function (req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    const bindings = await Binding.find({ user: user })
    return res.json(bindings)
  }
  catch (err) {
    return res.json([]);
  }
});

router.get('/likes/:userId', async function (req, res, next) {
  try {
    const user = await User.findById(req.params.userId);
    const likes = await Like.find({ user: user })
    return res.json(likes)
  }
  catch (err) {
    return res.json([]);
  }
});

router.get('/followers/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const followerInstances = await Follow.find({ userFollowed: user })
    return res.json(followerInstances)
  }
  catch (err) {
    return res.json([])
  }
})

router.get('/following/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    const followingInstances = await Follow.find({ userFollowing: user })
    return res.json(followingInstances)
  }
  catch (err) {
    return res.json([])
  }
})



async function uploadImage(req){
  console.log(`${req.body._id}.${req.body.photoType}`)
  const imageBufffer = Buffer.from(req.body.photo.replace(/^data:image\/\w+;base64,/, ""),'base64')
  const reqParams = {
    Bucket: process.env.AWS_BUCKET_NAME,     
    Key:`${req.body._id}.${req.body.photoType}`,               
    Body: imageBufffer,              
    ACL:"public-read-write",               
    ContentType:`image/${req.body.photoType}`,
    ContentEncoding: 'base64'
}


const s3 = new aws.S3()
s3.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,            
  secretAccessKey:process.env.AWS_SECRET_KEY,
  region: "us-west-2",
  signatureVersion: 'v4'})
  const url = []
  const s3Upload = await s3.upload(reqParams,(err,data) => {
            if(err){
                console.log(err)
            }if(data){
              return data
            }
        })
    return s3Upload
}

router.post('/:userId/images', async function (req, res, next) {

  try {
    const upload = await uploadImage(req)
    if(!upload.failed){
    
      const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3-us-west-2.amazonaws.com/${req.body._id}.${req.body.photoType}`
      const updatedUser = req.body
      updatedUser["photo"] = imageUrl
      return res.json(updatedUser)
    }

  }catch (err) {
    console.log(err)
    return res.json([])
  }
});

router.put('/:userId', function(req, res, next){
  try{
    const user = User.findOneAndUpdate(req.body._id,{photo: req.body.photo})
    console.log(Object.keys(user))
    console.log(user._collection)
    return res.json(user._update)
  }catch(err){

    return res.json(err)
  }
  
})


module.exports = router;
