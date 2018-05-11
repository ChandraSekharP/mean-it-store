
var AssetService = require('../services/assets.service')

_this = this

exports.getAssets = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    console.log(page, limit)

    try{
        var assets = await AssetService.getAssets({}, page, limit)
        return res.status(200).json({status: 200, data: assets, message: "Assets Received Succesfully"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createAsset = async function(req, res, next){
    var asset = {
        sku: req.body.sku,
        category: req.body.categorydescription
    }

    try{
        var createdAsset = await AssetService.createAsset(asset)
        return res.status(201).json({status: 201, data: createdAsset, message: "New Asset Created Succesfully"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Assset Todo Creation was Unsuccesfull"})
    }
}

exports.updateTodo = async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedTodo = await TodoService.updateTodo(todo)
        return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Tod"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeTodo = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await TodoService.deleteTodo(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}
