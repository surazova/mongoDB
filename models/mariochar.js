const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model

//schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//model 
const MarioChar = mongoose.model('mariochar', MarioCharSchema);
//when someone makes a new mario character, it will be in the mariochar collection, that will be based on the MarioCharSchema

module.exports = MarioChar;

