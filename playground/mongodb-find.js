const {MongoClient,ObjectID} = require('mongodb')




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //db.collection('Todos').find().toArray().then((docs)=>{
  //db.collection('Todos').find({completed:false}).toArray().then((docs)=>{	//specifing by completed

   // db.collection('Todos').find({
  //   _id: new ObjectID('5b1a3e36dedb5415b49eb0e8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
 
   // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Hillul'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
 // db.close();
});