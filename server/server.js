//Deploy Api to Heroku
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

//GET/todos/1234324
app.get('/todos/:id',(req,res)=>{
	
	var id=req.params.id;
	
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	 Todo.findById(id).then((todo)=>{
	 	if(!todo){
	 		return res.status(404).send();
	 	}
	 	res.send({todo});
	 }).catch((e)=>{
	 	res.status(400).send();
	 });

});


app.listen(port,()=>{
	console.log(`Starting up at port ${port}`);
});

module.exports = {app};


/*
//Getting individual Resource-GET todos

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

//GET/todos/1234324
app.get('/todos/:id',(req,res)=>{
	//res.send(req.params);
	var id=req.params.id;
	//Valid id using isValid 
	 //404 -send back empty send
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	 //findById
	 	//Success
	 		// if todo - send it back
	 		// if no todo - ssend 404 with empty body 
	 	  //error 
	 	    //400 -and send empty body back
	 Todo.findById(id).then((todo)=>{
	 	if(!todo){
	 		return res.status(404).send();
	 	}
	 	res.send({todo});
	 }).catch((e)=>{
	 	res.status(400).send();
	 });

});


app.listen(3000,()=>{
	console.log('Starting on port 3000');
});

module.exports = {app};
*/

/*
//testing get todos
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});


app.listen(3000,()=>{
	console.log('Starting on port 3000');
});

module.exports = {app};

*/
/*
//List Resource get todos
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});


app.listen(3000,()=>{
	console.log('Starting on port 3000');
});

module.exports = {app};
*/
/*
//test 0f post todos

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	});
});

app.listen(3000,()=>{
	console.log('Starting on port 3000');
});

module.exports = {app};
*/

/*
//Validation of Mongoose

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	}
});


// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

// User
// email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: 'andrew@example.com   '
});

user.save().then((doc) => {
  console.log('User saved', doc);
}, (e) => {
  console.log('Unable to save user', e);
});
*/
/*
//Setting up mongoose 

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text:{
		type:String
	},
	completed:{
		type:Boolean
	},
	completedAt:{
		type:Number
	}
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save', e);
});
*/