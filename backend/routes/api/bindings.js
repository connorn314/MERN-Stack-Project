const express = require('express');
const router = express.Router();

/* GET bindings listing. */
router.get('/', function(req, res, next) {
  res.json({
    message: "GET /api/bindings"
  });
});

module.exports = router;
