const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
id: Number,
name: String,
imageURL: String,
size: String,
brand: String,
date: String,
price: Number,
color: String
});
const Datatest = mongoose.model('Datatest',productSchema);
module.exports = Datatest;