/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// dependancies: ui.js
var UI  =__webpack_require__ (1)

var app = function(){
  new UI();
}

window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

//  dependencies: films.js
var Films = __webpack_require__(2);

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





/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Film = __webpack_require__(3);
var Review = __webpack_require__(4)

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
















/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Film = function(options){
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
  this.genre = options.genre;
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}

module.exports = Film;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var Review = function(options){
  this.comment = options.comment;
  this.rating = options.rating;
  this.author = options.author;
}

module.exports = Review;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map