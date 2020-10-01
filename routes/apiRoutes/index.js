const router = require('express').Router();
const userRoutes = require('./userRoutes');
// api prepended to everyRoute

router.use('/users', userRoutes);

module.exports = router;
