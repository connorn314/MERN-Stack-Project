const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Like = mongoose.model('Like');
const Binding = mongoose.model("Binding")

const validateLike = require('../../validations/like');


router.get('/', async function (req, res, next) {
  try {
    const likes = await Like.find()
    return res.json(likes);
  }
  catch (err) {
    return res.json([]);
  }
});

router.post('/new', validateLike, async (req, res, next) => {
  const newLike = new Like({
    user: req.body.user,
    binding: req.body.binding,
    game: req.body.game
  })
  if (newLike && newLike.save()) {
    return res.json( newLike )
  } else {
    return res.json()
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const like = await Like.findById(req.params.id);
    return res.json(like)
  }
  catch (err) {
    return res.json([]);
  }
});

router.get('/bindings/:bindingId', async function (req, res, next) {
  try {
    const binding = await Binding.findById(req.params.bindingId);
    const likes = await Like.find({binding: binding})
    return res.json(likes)
  }
  catch (err) {
    return res.json([]);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    const like = await Like.findByIdAndDelete(req.params.id);
    return res.json(like);

  } catch (err) {
    return res.json([err])
  }
});

module.exports = router;
