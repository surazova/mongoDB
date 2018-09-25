const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

mongoose.connect('mongodb://mongod:mongod123@ds123919.mlab.com:23919/mongod', { useNewUrlParser: true });

//Describe our tests 
describe('Nesting records', function (){
    
    //Add a before each mocha hook 
beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
        done();  //will drop data and then run 
    });
});
   
   //create tests 
   it('Creates an author with sub-documents', function(done){
       
       var pat = new Author ({
           name: 'Patrick Rothfuss',
           books: ({title: 'Name of the Wind', pages: 400})
       });
      
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
               assert(record.books.length === 1); 
               done();
            });
        });
       
   });
});


it('Adds a book to an author', function(done){
           var pat = new Author ({
           name: 'Patrick Rothfuss',
           books: ({title: 'Name of the Wind', pages: 400})
       });
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                //add a book to the books array/collection 
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
                        assert(result.books.length === 2); //2 because we added on an extra book 
                        done();
                    });
                });
            });
        });
});