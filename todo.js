var express = require('express');
var session = require('cookie-session');
var query = require('querystring');
var url = require('url');

var app = express();

app.use(session({
  	name: 'session',
  	keys: ['key1', 'key2']
  	}));

app.get('/',function(req,res) {

	let params = query.parse(url.parse(req.url).query);
	let todo = params['todo'];

	if (todo && req.session.todos) {
		req.session.todos.push(todo);	
	} else {
		req.session.todos = [];
	}

	console.log(req.session.todos);

	res.render('todo.ejs', {todos: req.session.todos});
});

app.get('/del/:this',function(req,res) {

	req.session.todos.splice(req.params.this,1);

	res.render('todo.ejs', {todos: req.session.todos});
	 
})

app.listen(8080);



