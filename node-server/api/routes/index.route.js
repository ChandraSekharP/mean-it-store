
var express = require('express');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken');
//var jwt = require('express-jwt');
/*var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
}); */

var AuthenticationController = require('../controllers/authentication.controller');
var AssetController = require('../controllers/assets.controller');

/* var assets = require('./assets.route')
var admin = require('./admin.route') */

router.post('/register', AuthenticationController.createUser);
router.get('/getUsers', AuthenticationController.getUsers);
router.post('/login', AuthenticationController.login);
router.post('/addAsset', AssetController.createAsset);
router.get('/viewAssets', AssetController.getAssets);
router.put('/updateAsset', AssetController.updateAsset);
router.delete('/deleteAsset/:id', AssetController.removeAsset);

module.exports = router;
