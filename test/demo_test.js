//Lesson 5 mongoDB 
//Installing MOCHA: You need to describe your tests for mocha to work 

const assert = require('assert');
//Describe the tests 
describe('some demo tests', function(){
    //Create tests
    it('adds two numbers together', function(){
        assert(2 + 3 === 5); //what we want to expect 
    });
});

//to run, change test in package.json to mocha 
//then, type "npm run test "