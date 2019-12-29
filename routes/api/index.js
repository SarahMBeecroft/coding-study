const router = require('express').Router();
const linkRoutes = require('./links');

// Book routes
router.use('/links', linkRoutes);

module.exports = router;
