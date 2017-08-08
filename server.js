var express = require('express');
var app = express();
var path = require('path');

// vvvvTHIS MAKES POST REQUESTS WORK
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// ^^^^THIS MAKES POST REQUESTS WORK

app.use(require('./client/src/controllers/indexController.js'))
app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});