const mongoose = require("../connection");

const schema = new mongoose.Schema({
  tags: String,
  rentableField: { type: Boolean },
  thumbnail: String,
  description: String,
});

const model = mongoose.model("equipment", schema);
module.exports = model;
