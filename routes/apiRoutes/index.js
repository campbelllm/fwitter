const router = require('express').Router();

// api prepended to everyRoute
router.get('/', (_req, res) => {
  res.send('Hello');
});

module.exports = router;
