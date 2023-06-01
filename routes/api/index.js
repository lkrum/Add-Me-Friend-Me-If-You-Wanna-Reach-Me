const router = require('express').Router();
// requiring routes in the api folder
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// establishing routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;