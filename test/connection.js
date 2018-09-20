const mongoose = require('mongoose');

//We need to create a hook for mocha (like a condition)

//Connect to the database before the test is run: 
before(function(done){  //added the done parameter
    //connect to mongoDB
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true }); //testaroo is a database on mongodb

mongoose.connection.once('open', function(){  //.once is an event listener 
    console.log('Connection has been made!');
    done();
}).on('err', function(error){
    console.log('Connection error:', error);
});
});

//You are telling mocha to wait until the connection has been made, before you run the tests, using the mocha hook 