const router = require('express').Router();
// requiring index.js in api folder
const apiRoutes = require('./api');

// allowing express to use apiRoutes
router.use('/api', apiRoutes);

// error handling
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
