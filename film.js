const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e"
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie/"
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200"


    $(document).ready(function () { 
        const movie_id = "804435"
        let urlWithQuery = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${URL_API_KEY}`

  $.ajax({
    url: urlWithQuery,
    success: function (movie) {
    
    $("#image").append()
    $("#title").append(movie.original_title)
    $("#date").append(movie.release_date)
    $("#synopsys").append(movie.overview)
    $("#director").append(movie.productions_compagnies_name)
    }    
 })

   $.ajax({
     url: urlWithQuery,
     success: function (movie) {
    
     $("#status").append(movie.status)
     $("#language").append(movie.original_language)

    }
 })
}) 
