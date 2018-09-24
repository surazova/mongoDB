const mongoose = require('mongoose');

//We need to create a hook for mocha (like a condition)


//Connect to the database before the test is run: 
before(function(done){  //added the done parameter
    //connect to mongoDB
mongoose.connect('mongodb://mongod:mongod123@ds123919.mlab.com:23919/mongod', { useNewUrlParser: true }); //testaroo is a database on mongodb

mongoose.connection.once('open', function(){  //.once is an event listener 
    console.log('Connection has been made!');
    done();
}).on('err', function(error){
    console.log('Connection error:', error);
    
  });
});

// Drop the characters collection before each test (dropm means delete)
beforeEach(function(done){
    //Drop the collection 
    mongoose.connection.collections.mariochars.drop(function(){    //CURRENTLY: drop not working for mlab 
        done();
    });  //set to plural 
});


//You are telling mocha to wait until the connection has been made, before you run the tests, using the mocha hook 
//to run mongod: mongod --bind_ip=$IP --nojournal
//monday: make sure to run in mariochar.js for the database to connect to mlab!
//this is a mocha test: to make sure that it runs; npm test 