/* var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ProfileController = require('../controllers/profile.controller');
var AuthenticationController = require('../controllers/authentication.controller');

// profile
router.get('/profile', auth, ProfileController.profileRead);

// authentication
router.post('/', AuthenticationController.register);
router.post('/', AuthenticationController.login);

module.exports = router; */
