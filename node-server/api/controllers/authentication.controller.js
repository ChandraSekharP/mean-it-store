
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var jwtSecret = 'jsonWebTokensAreAGreatIdea!';
var router = express.Router();
var UserModel = require("../models/authentication.model");
var UserService = require('../services/authentication.service')
//var User = mongoose.model('AuthenticationModel');

/* module.exports.register = function(req, res) {
  if (!req.body.username || !req.body.loginName || !req.body.userPassword.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      loginName: req.body.loginName,
      password: req.body.userPassword.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
} */

exports.getUsers = async function(req, res, next){
  /*var token = getToken(req.headers);
  if (token) {*/
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 30;

    console.log(page, limit)

    try{
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({status: 200, data: users, message: "Users List Received Succesfully"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
  /*} else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }*/
}

exports.createUser = async function(req, res, next){
  /*var token = getToken(req.headers);
  if (token) {*/
    var user = {
      username: req.body.username,
      loginName: req.body.loginName,
      password: req.body.password
    }
    try{
        var createdUser = await UserService.createUser(user)
        return res.status(201).json({status: 201, data: createdUser, message: "New User Created Succesfully"})
    }catch(e){
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"})
    }
   /*} else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }*/
}

exports.login = function(req, res, next) {
  var user = {
    loginName: req.body.loginName,
    password: req.body.password
  }
  try {
    UserModel.findOne({ loginName: req.body.loginName }, function(err, user) {
      if (err) throw err;

      if (!user) {
        return res.status(400).json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
          // check if password matches
          if (user.password != req.body.password) {
            return res.status(400).json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
              // if user is found and password is right create a token with only our given payload we don't want to pass in the entire user since that has the password
              const payload = { admin: user.admin };
              var token = jwt.sign('loginName', jwtSecret);
              // return the information including token as JSON
              return res.status(200).json({ status: 200, success: true, message: 'Enjoy your token!', token: token });
            }
        }
    })
  } catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }
}

/* function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
} */

/* module.exports.logout = function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
} */
