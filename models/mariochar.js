const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
mongoose.connect('mongodb://mongod:mongod123@ds123919.mlab.com:23919/mongod', { useNewUrlParser: true });
//schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//model 
const MarioChar = mongoose.model('mariochar', MarioCharSchema);
//when someone makes a new mario character, it will be in the mariochar collection, that will be based on the MarioCharSchema


//data 

var charOne = MarioChar({name: 'Mario'}).save(function(err){
    if (err) throw err;
    console.log('character saved');
});


module.exports = MarioChar;



