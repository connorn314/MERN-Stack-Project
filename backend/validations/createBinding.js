const { check } = require("express-validator");
const Game = require("../models/Game");
const handleValidationErrors = require('./handleValidationErrors');

const pcInputs = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0",  "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Return", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ControlRight", "Escape", "LButton", "RButton", "MButton", "WheelDown", "WheelUp"]

const xboxOneInputs = ["Left stick", "Left stick click", "Left bumper", "Left Trigger", "View button", "Xbox button", "Menu button", "Right bumper", "Directional pad up", "Directional pad down", "Directional pad left", "Directional pad right", "Right Trigger", "Right stick", "Right stick click", "X button", "Y button", "A button", "B button"]

const gameCubeInputs = ["Left trigger", "Right trigger", "Z button", "Control stick", "Y button", "X button", "A button", "B button", "Start pause button", "Directional pad up", "Directional pad down", "Directional pad left", "Directional pad right", "C-stick"]

const controlOptions = {
    "pc": pcInputs,
    "xbox-one": xboxOneInputs,
    "game-cube": gameCubeInputs
}

const validateBindingInput = [
    check('keyBinds').custom(async (value, {req, next}) => {
        let game = await Game.findById(req.body.game)
        Object.keys(value).forEach(movement => {
            if (!game.validMovements.includes(movement) || !controlOptions[req.body.controller].includes(value[movement])){
                return next();
            }
        })
    }).withMessage("invalid movement or key for controller or game"),
    handleValidationErrors
];



module.exports = validateBindingInput;