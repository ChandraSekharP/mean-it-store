var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var AssetSchema = new mongoose.Schema({
    assetId: String,
    category: String,
    make: String,
    primary: String,
    date: Date
})

AssetSchema.plugin(mongoosePaginate)
const AssetModel = mongoose.model('Asset', AssetSchema)

module.exports = AssetModel;
