const { json } = require('express');
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const Binding = mongoose.model('Binding');

const validateBindingInput = require('../../validations/createBinding');

/* GET bindings listing. */
router.get('/', async function(req, res, next) {
  try {
      const bindings = await Binding.find()
      return res.json(bindings);
  }
  catch(err) {
      return res.json([]);
  }
});

router.post('/new', validateBindingInput, async (req, res, next) => {
  const newBinding = new Binding({
    user: req.body.user,
    game: req.body.game,
    controller: req.body.controller,
    keyBinds: req.body.keyBinds
  })
  if (newBinding && newBinding.save()){
    return res.json(newBinding)
  } else {
    return res.json()
  }
});

router.patch('/:id/edit', validateBindingInput, async (req, res, next) => {
  try {
    const updatedBinding = await Binding.findByIdAndUpdate(req.params.id, 
      {
        user: req.body.user,
        game: req.body.game,
        controller: req.body.controller,
        keyBinds: req.body.keyBinds
      },
      {new: true}
    );
    return res.json(updatedBinding)
  } catch(err) {
    return res.json([err])
  }
})

router.get('/:id', async function(req, res, next) {
  try {
      const binding = await Binding.findById(req.params.id);
      return res.json(binding)
  }
  catch(err){
      return res.json([]);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    const binding = await Binding.findByIdAndDelete(req.params.id);
    return res.json(binding);

  } catch(err) {
    return res.json([err])
  }
});



module.exports = router;
