const assert = require('assert');
const MarioChar = require('../models/mariochar') 

//Describe the tests 
//before(function(done){
    
    describe('Saving records', function(){
    //Create tests
    it('Saves a record to the databse', function(done){ 
        var char = new MarioChar({
            
            name: 'Mario'
        });
            char.save().then(function(){  
                assert(char.isNew === false); 
                done();
            });  

       // describe('timeout', function(){
    //    this.timeout(30000);
      //  done();
        // it('timeout', function(done){
         //this.timeout(30000);
         //setTimeout(done, 30000);
  });
});


//to run, change test in package.json to mocha 
//then, type "npm run test "