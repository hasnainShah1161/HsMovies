//this is the file to handle the downloading functionality
//calling the classes
const uiObject = new yts_ui();
const apiObject = new YtsApi();
//storing the value of the downlad movies div in variable
const containerFordwnldMmovies = document.getElementById(
  "containerDivforDownloadMovies"
);
const containerForMovieSuggestions = document.getElementById(
  "containerForMovieSuggestions"
);
//this is how we can get the last parameters from the url
var id = window.location.href.split("=")[1];
var url_string = `http://127.0.0.1:5500/downloadMovie.html?movie_id=${id}`;
var url = new URL(url_string);
var movieID = url.searchParams.get("movie_id");
//displaying the movie on the downloading div
apiObject.movieDetails(movieID).then(response => {
  const movieDetailResponse = response.movieDetailsResponse.data.movie;
  uiObject.displayMoviesDetails(movieDetailResponse);
  uiObject.movieTrailer(movieDetailResponse);
});

apiObject.movieSuggestions(movieID).then(response => {
  let movieSuggestion = response.movieSuggestionResponse.data.movies;
  uiObject.movieSuggestionsUI(movieSuggestion);
  console.log(response);
});
//when the form1 is submited on the downloadMovies page
const searchForm = document.getElementById("searchform");
// creating the event listner on the input field
searchForm.addEventListener("submit", e => {
  let inputvalue = document.getElementById("searchMovies").value;
  apiObject.gettingDataFromYts(inputvalue).then(response => {
    //displaying the movies on the screen

    //when the search field is  empty
    if (document.getElementById("searchMovies").value === "") {
      uiObject.whenNoResultFound();
      uiObject.clearingTheAlert();
    }
    //when no result found
    else if (response.yts_response.data.movie_count == 0) {
      uiObject.whenNoResultFound();
      //clearing the alert
      uiObject.clearingTheAlert();
    }
    //when there are results for the search
    else if (response.yts_response.data.movie_count > 0) {
      document.getElementById("containerDivforDownloadMovies").innerHTML = "";
      document.getElementById("containerCast").innerHTML = "";
      document.getElementById("movieTrailer").innerHTML = "";
      containerForMovieSuggestions.innerHTML = "";
      const searchMoviesArray = response.yts_response.data.movies;

      searchMoviesArray.forEach(singleIteration => {
        uiObject.downloadMoviesForm1(singleIteration);
      });
    }
  });
  e.preventDefault();
});

//keyup movies suggestions

let keyupInputvalue = document.getElementById("searchMovies");
keyupInputvalue.addEventListener("keyup", e => {
  if (document.getElementById("searchMovies").value !== "") {
    document.getElementById("keyupMoviesSuggestion").innerHTML = "";
    apiObject.gettingDataFromYts(keyupInputvalue.value).then(response =>
      response.yts_response.data.movies.slice(0, 4).map(result => {
        uiObject.keyupMoviesSuggestion(result);
      })
    );
  } else if (document.getElementById("searchMovies").value !== "") {
    document.getElementById("keyupMoviesSuggestion").innerHTML = "";
  }
});
