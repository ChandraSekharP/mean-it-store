var AssetModel = require('../models/asset.model')

_this = this


exports.getAssets = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var assets = await AssetModel.paginate(query, options)
        return assets;
    } catch (e) {
        throw Error('Error while Paginating Assets')
    }
}

exports.createAsset = async function(asset){

    var newAsset = new AssetModel({
        sku: asset.sku,
        category: asset.category,
        date: new Date(),
    })

    try{
        var savedAsset = await newAsset.save()
        return savedAsset;
    }catch(e){
        throw Error('An Error Occured while Creating New Asset')
    }
}

/* exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    if(!oldTodo){
        return false;
    }

    console.log(oldTodo)

    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteTodo = async function(id){

    try{
        var deleted = await ToDo.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
} */
