//creating object of the api class
const apiObject = new YtsApi();
//creating object of the ui class
const uiObject = new yts_ui();
//setting th movies on the home page to display when the page loaded
apiObject.gettingDataForHomePage().then(response => {
  //storing the array of images in the variable array
  const arrayOfMovies = response.yts_home_response.data;
  console.log(response);
  //getting the images/year/and names of the movies on the home page to display
  arrayOfMovies.movies.forEach(singleIteration => {
    uiObject.displayMoviesOnHomePage(singleIteration);
  });
});
const searchForm = document.getElementById("searchform");
//creating the variable for the movies container
const moviesContainer = document.getElementById("moviesDiv");
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
      document.getElementById("moviesDiv").innerHTML = "";
      const searchMoviesArray = response.yts_response.data.movies;

      searchMoviesArray.forEach(singleIteration => {
        uiObject.displayMovies(singleIteration);
      });
    }
  });
  e.preventDefault();
});
