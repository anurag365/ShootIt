const { Schema } = require('mongoose')
const mongoose = require('../connection')


 const schem = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, ref:"users"},
    equipment:{type:mongoose.Types.ObjectId, ref:"equipmentModel"},
    amount: Boolean  

 })
 const model = mongoose.model('order', schema)
 module.exports = model;