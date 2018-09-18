const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true }); //testaroo is a database on mongodb

mongoose.connection.once('open', function(){  //.once is an event listener 
    console.log('Connection has been made!');
}).on('err', function(error){
    console.log('Connection error:', error);
});