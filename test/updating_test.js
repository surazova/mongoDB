const assert = require('assert');
const MarioChar = require('../models/mariochar')

//Describe the tests 
describe('Updating records', function() {

var char   //declared char
    beforeEach(function(done) {
        char = new MarioChar({
        name: 'Mario'
        });
        
        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

        //Create tests
        it('Updates one record in the database', function(done) {

       MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){  //use .then if asynchronous 
           MarioChar.findOne({_id: char._id}).then(function(result){
               assert(result.name === 'Luigi');
               done();
           });
       });
                    
                });
            });
