//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

var obj = new ObjectID();
console.log(obj);

//const user = {name:'Hillul',age:34};//forming an object
//var {name} = user;//destructing the object
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  
// db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)


//  db.collection('Users').insertOne({
  //  //_id:123,
    //name: 'Hillul',
    //age: 21,
//    location: 'Philadelphia'
//  }, (err, result) => {
//    if (err) {
//      return console.log('Unable to insert user', err);
//    }
//    //console.log(result.ops)
//    //console.log(result.ops[0]._id);//to get the time stamp
//    console.log(result.ops[0]._id.getTimestamp());
//  });
  db.close();
});
/*
//connecting to the database

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
// db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Hillul',
    age: 21,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });
	db.close();
});*/