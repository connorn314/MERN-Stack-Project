# KeyWi

If you haven't already, visit the live site hosted on render! [KeyWi](https://keywi.onrender.com)

# Background

KeyWi is a game keyboard-binding website that helps connect and share each others key-binding preferences.

# Features

### User Authentication

* Secure password authentication for exisiting and new user accounts.
* Every exisiting email and username are unique.
<img width="931" alt="Screen Shot 2022-12-23 at 7 48 35 AM" src="https://user-images.githubusercontent.com/51464137/209362783-5e423cc0-2af1-474e-b2f4-99d2830a4a11.png">

### Binding Postings

* Users are able to create personal keyboard bindings and store them onto their profile.
<img width="1440" alt="Screen Shot 2022-12-23 at 7 50 01 AM" src="https://user-images.githubusercontent.com/51464137/209363216-0ef1f2b5-1dbb-47d0-b351-ec486ba83503.png">

* Games will have different bindings depending on their compatability.
<img width="1267" alt="Screen Shot 2022-12-23 at 7 50 22 AM" src="https://user-images.githubusercontent.com/51464137/209363226-1f11dd04-efb9-4678-9228-ffd1559125e7.png">


### Profile Image

* Users are able to upload their own profile picture of their choosing
<img width="1352" alt="Screen Shot 2022-12-23 at 7 52 53 AM" src="https://user-images.githubusercontent.com/51464137/209363378-7e2fc8d9-286b-4888-a92c-99d294d79a29.png">
<img width="1298" alt="Screen Shot 2022-12-23 at 7 53 11 AM" src="https://user-images.githubusercontent.com/51464137/209363366-2a8d6728-0bef-486b-a7a4-5d7f4e572c37.png">

### Likes

* Like other users bindings while logged in.
* Likes heart are responsive and keeps tracks of how many likes that binding occured.
<img width="1022" alt="Screen Shot 2022-12-23 at 7 54 16 AM" src="https://user-images.githubusercontent.com/51464137/209363509-9fc15df1-d12c-4208-9928-9b201a97c3d6.png">


### Follows

* Follow other users while logged in.
* Users profile page has the followers and following number data.
<img width="1187" alt="Screen Shot 2022-12-23 at 7 55 04 AM" src="https://user-images.githubusercontent.com/51464137/209363585-565857a4-f1aa-4bb2-b1f1-2b982c34727e.png">

# Code Snippets
### Express Custom Validator
```
const pcInputs = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0",  "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Return", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ControlRight", "Escape", "LButton", "RButton", "MButton", "WheelDown", "WheelUp"]

const xboxOneInputs = ["Left stick", "Left stick click", "Left bumper", "Left Trigger", "View button", "Xbox button", "Menu button", "Right bumper", "Directional pad up", "Directional pad down", "Directional pad left", "Directional pad right", "Right Trigger", "Right stick", "Right stick click", "X button", "Y button", "A button", "B button", "Home button", "Start button", "Right start button"]

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
```
The above snippet is from the createBinding validation in backend:
* Utilizes JavaScript async-await functionality to fetch game only once, then iterates through the key-value pairs of the binding checking that both movement and controller input are valid to them respective game and controller.
* This validation will allow multiple movements to the same controller input by design.

