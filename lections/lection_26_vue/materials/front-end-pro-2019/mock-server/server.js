var express = require('express');
var app = express();
const port = 3001;

let users = require('./user-data/user.json');

console.log(users, 'users');


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send({name:'Valera'});
});



app.post('/users/:foo', function(req, res) {
  console.log(req.params)
  const id = req.params.foo;

  res.send(users.filter(user => user.id == id));
});

app.get('/users/:foo', function(req, res) {
  console.log(req.params)
  const id = req.params.foo;

  res.send(users.filter(user => user.id == id));
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
