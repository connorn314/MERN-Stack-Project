const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Game = mongoose.model('Game')

router.get('/', function(req, res, next) {
    res.json({
        message: "GET /api/games"
    });
});

router.post('/new', async function(req, res, next) {
    const game = await Game.findOne({
        $or: [
            { title: req.body.title }
        ]
    });

    if (game) {
        const err = new Error("Validation Error");
        err.statusCode = 400;
        const errors = {};
        if (user.title === req.body.title) {
        errors.title = "A game has already registered with this title";
        }
        err.errors = errors;
        return next(err);
    }

    const newGame = new Game({
        title: req.body.title,
        description: req.body.description,
        compatibility: req.body.compatibility,
        developer: req.body.developer
    })

    if (newGame && newGame.save()) {
        return res.json({newGame})
    } else {
        throw res
    }
})


module.exports = router;