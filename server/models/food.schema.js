const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: { type: String, required: true, unique: true },
    delish: { type: String, required: true }
});

//hey Mongoose, use the 'book' collection!
//Mongoose sez: Welcome to 'books'!
module.exports = mongoose.model( 'game', foodSchema);