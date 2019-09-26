var express = require('express');
var app = express();
var persons = require('./peoples/persons');
const port = 3001;
console.log(persons);


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
