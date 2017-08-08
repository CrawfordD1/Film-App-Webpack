//  dependencies: films.js
var Films = require("../models/films.js");

var UI = function(){
  var filmArray = new Films();
  var films = filmArray.films;
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(container, review){
    this.appendText(container, review.comment, "Comment: ");
    this.appendText(container, review.rating, "Rating: ");
    this.appendText(container, review.author, "Author: ");
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");

      var liGenre = document.createElement("li");
      this.appendText(liGenre, film.genre, "Genre: ");
      
      for(var review of film.reviews){
        this.createReview(li, review);
      }
      container.appendChild(li);
      container.appendChild(liGenre);
    }
  }
}


module.exports = UI;



