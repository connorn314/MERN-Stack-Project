const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Follow = mongoose.model('Follow');

const validateFollowUniquePairing = require('../../validations/follow');

router.get('/', async (req, res) => {
    try {
        const follows = await Follow.find()
        return res.json(follows)
    }
    catch(err){
        return res.json([]);
    }
});

router.post('/new', validateFollowUniquePairing, async (req, res) => {
    const newFollow = new Follow({
        userFollowed: req.body.userFollowed,
        userFollowing: req.body.userFollowing
    })
    if (newFollow && newFollow.save()){
        return res.json(newFollow)
    } else {
        return res.json([])
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        const follow = await Follow.findByIdAndDelete(req.params.id);
        return res.json(follow);
    } catch(err) {
        return res.json([err])
    }
});

module.exports = router;