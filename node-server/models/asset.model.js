var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var AssetSchema = new mongoose.Schema({
    sku: String,
    category: String,
    date: Date
})

AssetSchema.plugin(mongoosePaginate)
const AssetModel = mongoose.model('Asset', AssetSchema)

module.exports = AssetModel;
