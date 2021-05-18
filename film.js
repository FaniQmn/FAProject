const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e"
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie/"
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200"


    $(document).ready(function () { 
        const movie_id = "804435"
        let urlWithQuery = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${URL_API_KEY}`
        let urlWithQueryBis = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${URL_API_KEY}`
  $.ajax({
    url: urlWithQuery,
    success: function (movie) {
        console.log(movie)
    
    $("#image").append()
    $("#title").append(movie.original_title)
    $("#date").append(movie.release_date)
    $("#synopsys").append(movie.overview)*
    $("#status").append(movie.status)
    $("#language").append(movie.original_language)
    }    
 })

   $.ajax({
     url: urlWithQueryBis,
     success: function (credits) {
        credits.cast.forEach(function(person) {
            $("#director").append(person.name)
        })

        credits.cast.forEach(function(member) 
        {   let imgBis = `<img src="${URL_IMAGE_PREFIX+member.profile_path}">`
            $("#cast").append(imgBis)
        })

    
        


    }
 })
}) 
