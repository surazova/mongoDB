//Lesson 8 mongoDB
//Robomongo-gives us a visual representation of our data, in mongoDB 

const assert = require('assert');
const MarioChar = require('../models/mariochar') 

//Describe the tests 
describe('Saving records', function(){
    //Create tests
    it('Saves a record to the databse', function(done){ 
        var char = new MarioChar({
            
            name: 'Mario'
        });
            char.save().then(function(){  
                assert(char.isNew === false); 
            });  
    });
});

//to run, change test in package.json to mocha 
//then, type "npm run test "