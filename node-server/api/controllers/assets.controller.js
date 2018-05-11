
/* var express = require('express');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var router = express.Router(); */

var AssetService = require('../services/assets.service')

_this = this

exports.getAssets = async function(req, res, next){
  /*var token = getToken(req.headers);
  if (token) {*/
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 30;

    console.log(page, limit)

    try{
        var assets = await AssetService.getAssets({}, page, limit)
        return res.status(200).json({status: 200, data: assets, message: "Assets Received Succesfully"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
  /*} else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }*/
}

exports.createAsset = async function(req, res, next){
  /*var token = getToken(req.headers);
  if (token) {*/
    var asset = {
        assetId: req.body.assetId,
        category: req.body.category,
        make: req.body.make,
        primary: req.body.primary
    }

    try{
        var createdAsset = await AssetService.createAsset(asset)
        return res.status(201).json({status: 201, data: createdAsset, message: "New Asset Created Succesfully"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Assset Creation was Unsuccesfull"})
    }
   /*} else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }*/
}

exports.updateAsset = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var asset = {
        id,
        assetId: req.body.assetId ? req.body.assetId : null,
        category: req.body.category ? req.body.category : null,
        make: req.body.make ? req.body.make : null,
        primary: req.body.primary ? req.body.primary : null
    }

    try{
        var updatedAsset = await AssetService.updateAsset(asset)
        return res.status(200).json({status: 200, data: updatedAsset, message: "Succesfully Updated Asset"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeAsset = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await AssetService.deleteAsset(id)
        return res.status(200).json({status:200, message: "Succesfully Asset Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

/* getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
}; */
