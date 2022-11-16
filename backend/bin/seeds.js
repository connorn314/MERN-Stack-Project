const mongoose = require('mongoose');
const info = require('../config/keys');
const User = require("../models/User");
const Game = require("../models/Game");

// console.log(info)
// // const Binding = require("./models/Binding")
// db = info.mongoURI
// console.log(db)
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB successfully");
//   })
//   .catch(err => console.log(err));


const seedUsers = [
    {
        username: 'demo-lition',
        email: 'demo@user.io',
        password: 'password'
    },
    {
        username: 'bigSuprise',
        email: 'BS@user.io',
        password: 'password'
    },
    {
        username: 'conman99',
        email: 'conman@user.io',
        password: 'password'
    },
    {
        username: 'michaelthAman',
        email: 'MA@user.io',
        password: 'password'
    },
    {
        username: 'vince',
        email: 'vince@user.io',
        password: 'password'
    },
    {
        username: 'fifi',
        email: 'fifi@user.io',
        password: 'password'
    }
]

const seedGames = [
    {
        title: "Rocket League",
        description: "Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on. In June 2016, 505 Games began distributing a physical retail version for PlayStation 4 and Xbox One, with Warner Bros. Interactive Entertainment taking over those duties by the end of 2017. Versions for macOS and Linux were also released in 2016, but support for their online services were dropped in 2020. The game went free-to-play in September 2020.",
        compatibility: "xbox-one pc",
        developer: "Psyonix",
        validMovements: ["accelerate", "reverse", "steer", "jump", "boost", "powerslide", "skip replay", "air steer and pitch", "air roll", "camera swivel", "focus on ball", "rear view", "scoreboard", "air roll left", "air roll right"]
    },
    {
        title: "League of Legends",
        description: "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre. In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a 'champion', with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their 'Nexus', a large structure located within.",
        compatibility: "pc",
        developer: "Riot Games",
        validMovements: ["ability1", "ability2", "ability3", "ability4", "summoner spell 1", "summoner spell 2", "item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "trinket"]
    },
    {
        title: "Super Smash Bros. Ultimate",
        description: "Super Smash Bros. Ultimate[a] is a 2018 crossover fighting game developed by Bandai Namco Studios and Sora Ltd. and published by Nintendo for the Nintendo Switch. It is the fifth installment in the Super Smash Bros. series, succeeding Super Smash Bros. for Nintendo 3DS and Wii U. The game follows the series' traditional style of gameplay: controlling one of the various characters, players must use differing attacks to weaken their opponents and knock them out of an arena. It features a wide variety of game modes, including a campaign for single-player and multiplayer versus modes. Ultimate features 89 playable fighters, including all characters from previous Super Smash Bros. games alongside newcomers. The roster ranges from Nintendo mascots to characters from third-party franchises.",
        compatibility: "game-cube",
        developer: "Bandai Namco Studios",
        validMovements: ["tilt attack", "special", "attack", "jump", "grab", "shield"]
    }
]

const seedBindings = [
    {
        user: "637282eebd6fc91887a87872",
        game: "63752846afb6a1247fc7250c", //Rocket League
        controller: "xbox-one",
        keyBinds: {
            "accelerate": "Right Trigger",
            "reverse": "Left Trigger",
            "focus on ball": "Y button",
            "jump": "A button",
            "boost": "B button",
            "air roll": "X button",
            "air steer and pitch": "Left stick",
            "camera swivel": "Right stick",
            "rear view": "Right stick click",
            "scoreboard": "Left bumper"
        }
    },
    {
        user: "637282eebd6fc91887a87872",
        game: "63752873afb6a1247fc7250f", //LoL
        controller: "pc",
        keyBinds: {
            "ability1": "KeyQ", 
            "ability2": "KeyW", 
            "ability3": "KeyE", 
            "ability4": "KeyR", 
            "summoner spell 1": "KeyD", 
            "summoner spell 2": "KeyF", 
            "item 1": "Digit1", 
            "item 2": "Digit2", 
            "item 3": "Digit3", 
            "item 4": "Digit5", 
            "item 5": "Digit6", 
            "item 6": "Digit7", 
            "trinket": "Digit4"
        }
    },
    {
        user: "637282eebd6fc91887a87872",
        game: "63752897afb6a1247fc72512", //Smash Bros.
        controller: "game-cube",
        keyBinds: {
            "shield": "Left trigger",
            "grab": "Z button",
            "jump": "Y button",
            "attack": "A button",
            "special": "B button",
            "tilt attack": "C-stick"

        }
    }
    // ,
//     {
//         user: "",
//         game: "",
//         controller: "",
//         keyBinds: {}
//     },
//     {
//         user: "",
//         game: "",
//         controller: "",
//         keyBinds: {}
//     },
//     {
//         user: "",
//         game: "",
//         controller: "",
//         keyBinds: {}
//     },
//     {
//         user: "",
//         game: "",
//         controller: "",
//         keyBinds: {}
//     },
//     {
//         user: "",
//         game: "",
//         controller: "",
//         keyBinds: {}
//     }
]

// const seedDB = async () => {
//     console.log("deleting users...");
//     await User.deleteMany({});
//     console.log("deleting games...");
//     await Game.deleteMany({});
//     console.log("creating users...");
//     await User.insertMany(seedUsers);
//     console.log("creating games...");
//     await Game.insertMany(seedGames);
//     console.log("Done!")
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// });