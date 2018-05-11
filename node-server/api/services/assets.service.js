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
        assetId: asset.assetId,
        category: asset.category,
        make: asset.make,
        primary: asset.primary,
        date: new Date(),
    })

    try{
        var savedAsset = await newAsset.save()
        return savedAsset;
    }catch(e){
        throw Error('An Error Occured while Creating New Asset')
    }
}

exports.updateAsset = async function(asset){
    var id = asset.id

    try{
        var oldAsset = await AssetModel.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Asset")
    }

    if(!oldAsset){
        return false;
    }

    console.log(oldAsset)

    oldAsset.assetId = asset.assetId
    oldAsset.category = asset.category
    oldAsset.make = asset.make
    oldAsset.primary= asset.primary

    console.log(oldAsset)

    try{
        var savedAsset = await oldAsset.save()
        return savedAsset;
    }catch(e){
        throw Error("And Error occured while updating the Asset");
    }
}

exports.deleteAsset = async function(id){

    try{
        var deleted = await AssetModel.deleteOne({_id: id},function() {
            return deleted
        })
    }catch(e){
        throw Error("Error Occured while Deleting the Asset")
    }
}
