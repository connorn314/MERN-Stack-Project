const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Binding = mongoose.model('Binding');
const Game = mongoose.model('Game')

router.get('/', async function(req, res, next) {
    try {
        const games = await Game.find()
        return res.json(games);
    }
    catch(err) {
        return res.json([]);
    }
    // res.json({
    //     message: "GET /api/games"
    // });
});

router.get('/:id', async function(req, res, next) {
    try {
        const game = await Game.findById(req.params.id);
        return res.json(game)
    }
    catch(err){
        return res.json([]);
    }
})

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
        developer: req.body.developer,
        validMovements: req.body.validMovements
    })

    if (newGame && newGame.save()) {
        return res.json({newGame})
    } else {
        throw res
    }
})

router.delete('/:id', async function(req, res, next) {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        return res.json(game);
    }
    catch(err){
        return res.json([]);
    }
});

router.get('/bindings/:gameId', async function (req, res, next) {
    try {
        const game = await Game.findById(req.params.gameId);
        const bindings = await Binding.find({ game: game })
        return res.json(bindings)
    }
    catch (err) {
        return res.json([]);
    }
})




module.exports = router;