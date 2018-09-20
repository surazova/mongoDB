//Lesson 7 mongoDB
//Using ES6 Library (instead of the D4)
//This lesson is based on an error 


//es6 promises
//this is not required for c9---> mongoose.Promise = global.Promise 


const assert = require('assert');
const MarioChar = require('../models/mariochar') //we are going to make a new mario character 

//Describe the tests 
describe('Saving records', function(){
    //Create tests
    it('Saves a record to the databse', function(done){ //done--for mocha to know that it is done 
        var char = new MarioChar({
            
            name: 'Mario'
        });
            char.save().then(function(){  //when we run, we need it to finish, and then assert (not asynchronous)
                assert(char.isNew === false); //false--not new and then it will save onto the database
                done();
            });  
    });
});

//to run, change test in package.json to mocha 
//then, type "npm run test "