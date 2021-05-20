const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/search/movie/";
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200";


$(function () {

    $(document).ready(function () {
        let urlWithQuery = `https://api.themoviedb.org/3/person/3223/movie_credits?api_key=${URL_API_KEY}&language=en-US`
        $.ajax({
            url: urlWithQuery,
            success: function (data) {
                console.log(data)
                const credits= data.cast
                console.log(credits)
                credits.forEach(function(credit){
                    let mystring=`<img class="movie-box" src="${URL_IMAGE_PREFIX+credit.poster_path}">`
                  $("#credits").append(mystring)  

                })
            }
        })
    })
})

