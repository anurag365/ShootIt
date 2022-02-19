const { Schema } = require('mongoose')
const mongoose = require('../connection')


 const schem = new mongoose.Schema({
    tags:String,
    rentableField: {type: Boolean},
    thumbnail: String,
    description:String

 })
 const model = mongoose.models('equipmentModel', schema)
 module.exports = model;