var Film = require("./film.js");
var Review = require("./review.js")

var Films = function(){
  this.films = [];
  this.populateArray();
}

Films.prototype = {
  createNewFilm: function(reqBody){
    var review = {
      comment: reqBody.comment,
      rating: parseInt(reqBody.rating),
      author: reqBody.author
    }
    var reviewArray = [review];

    var actorArray = JSON.parse(reqBody.actors);

    var options = {
      title: reqBody.title,
      actors: actorArray,
      reviews: reviewArray,
      genre: reqBody.genre
    }
  var film = new Film(options);
  this.films.push(film)

  },
  populateArray: function(){
    var review1 = new Review({
      comment: "It's not even a thing. What just happened. I want my life back.",
      rating: 1,
      author: "Val"
    });

    var review2 = new Review({
      comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
      rating: 100,
      author: "Val"
    });

    var review3 = new Review({
      comment: "Uhhh...Produced by Aliens",
      rating: 1337,
      author: "Kieran"
    })

    var film1 = new Film({
      title: "Now You See Me",
      actors: ["Woody Harrelson", "Jesse Eisenberg"],
      genre: "Nonsense"
    });

    var film2 = new Film({
      title: "Star Wars Episode IV: A New Hope",
      actors: ["Harrison Ford", "Alec Guiness"],
      genre: "Sci-fi"
    });

    var film3 = new Film({
      title: "The Room",
      actors: ["Tommy Wiseau", "Greg Sestero"],
      genre: "Factual"
    })

    film1.addReview(review1);
    film2.addReview(review2);
    film3.addReview(review3);

    this.films.push(film1);
    this.films.push(film2);
    this.films.push(film3);
  }
}



module.exports = Films;














