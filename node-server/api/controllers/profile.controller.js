/* var mongoose = require('mongoose');
//var Admin = mongoose.model('Admin');
var AdminModel = require('../models/admin.model')

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Admin
      .findById(req.payload._id)
      .exec(function(err, admin) {
        res.status(200).json(admin);
      });
  }

}; */
