const { Schema } = require('mongoose')
const mongoose = require('../connection')


 const schema = new mongoose.Schema({
     fullname : String,
     email : String,
     password : String,
     isadmin: Boolean,
     confirmpassword : String,
     createdAt: { type: Date, default: new Date() },

     
 })
 const model = mongoose.model('users', schema)
 module.exports = model;