const assert = require('assert');
const MarioChar = require('../models/mariochar')

//Describe the tests 
describe('Updating records', function() {

var char   //declared char
    beforeEach(function(done) {
        char = new MarioChar({
        name: 'Mario',
        weight: 50
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
       
          it('Increments the weight by one in the database', function(done) {

       MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
           MarioChar.findOne({name: 'Mario'}).then(function(record){
               assert(record.weight === 51);
               done();
           });
       });  //$inc is the increment operator, the weight will be +1
           });
       });
       
                    
               