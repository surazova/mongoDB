const assert = require('assert');
const MarioChar = require('../models/mariochar')

//Describe the tests 
describe('Finding records', function() {

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
        it('Find one record from the database', function(done) {

            MarioChar.findOne({ name: 'Mario' }).then(function(result) {
                assert(result.name === 'Mario');
                done();
            });
        });
            
             it('Find one record by ID from the database', function(done) {

            MarioChar.findOne({_id: char._id}).then(function(result) {
                assert(result._id.toString === char._id.toString); //change toString because _id is an object, not a string 
                done();
            });

    });
});
//to run, change test in package.json to mocha 
//then, type "npm run test "