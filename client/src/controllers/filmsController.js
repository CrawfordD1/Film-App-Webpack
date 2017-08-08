var express = require('express');
var filmRouter = express.Router();
var Films = require('../models/films.js')

var films = new Films();
var filmArray = films.films;


filmRouter.get('/', function(req, res){
  res.json({filmData: filmArray});
})

filmRouter.get('/:id', function(req, res){
  var index = req.params.id;
  res.json({filmData: filmArray[index]});
})

filmRouter.post('/', function(req, res){
  film = films.createNewFilm(req.body);
  res.json({filmData: filmArray});
})

filmRouter.put('/:id', function(req, res){
  film = films.createNewFilm(req.body);
  var index = req.params.id;
  filmArray[index] = film;
  res.json({filmData: filmArray});
})

filmRouter.delete('/:id', function(req, res){
  var index = req.params.id;
  filmArray.splice(index, 1);
  res.json({filmData: filmArray});
})

module.exports = filmRouter;