const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie/";
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200";


$(function() {
  
$(document).ready(function () { 
    let urlWithQuery = `https://api.themoviedb.org/3/movie/popular?api_key=${URL_API_KEY}&language=en-US&page=1`

  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.results; // results est un array
      
      movies.forEach(function(movie) {
        let movieHtmlToAdd = `<div class="col-2">`;
        movieHtmlToAdd     += `<div>`;
        movieHtmlToAdd     += "<p><strong>Date de sortie</strong> : "+ movie.release_date +"</p>";
        movieHtmlToAdd     += '</div>';
        movieHtmlToAdd     += '<div>';
        movieHtmlToAdd     += `<img src="${URL_IMAGE_PREFIX + movie.poster_path}">`;
        movieHtmlToAdd     += `<h3> <a href="./film.html?filmId=${movie.id}">${movie.title}</a> </h3>`;
        movieHtmlToAdd     += '</div>';
        movieHtmlToAdd     += '</div>';
        $("#movies").append(movieHtmlToAdd);
      });
    },
  });
})
})

