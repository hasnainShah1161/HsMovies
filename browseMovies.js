//creating the object of YtsApi class
const browseMoviesApiObj = new YtsApi();
//creeting the object of ui class
const uiObject = new yts_ui();
// creating variables of form2 variables
const form2 = document.getElementById("form2");
const form2Search = document.getElementById("form2Search");
const quality = document.getElementById("quality");
const genre = document.getElementById("genre");
const sort_by = document.getElementById("sort_by");
const rating = document.getElementById("rating");
//browse movies container
const browseMoviesContainer = document.getElementById("browseMovies");
uiObject.browseNextPageMovies();
//displaying movies on the browseMovies home page
browseMoviesApiObj.gettingDataForHomePage(3).then(response => {
  //storing the array of images in the variable array
  const arrayOfMovies = response.yts_home_response.data.movies;
  console.log(response);

  //getting the images/year/and names of the movies on the home page to display
  arrayOfMovies.forEach(singleIteration => {
    uiObject.displayMoviesONBrowseHomePage(singleIteration);
    console.log(singleIteration.title_english);
  });
});
//creating event listner on the form2
form2.addEventListener("submit", function(e) {
  browseMoviesApiObj
    .browseMovies(
      form2Search.value,
      quality.value,
      genre.value,
      rating.value,
      sort_by.value
    )
    .then(response => {
      //storing the array of movies in the variable
      const arrayOfBrowseMovies = response.browseMoviesRes.data.movies;
      if (browseMoviesContainer.innerHTML !== "") {
        browseMoviesContainer.innerHTML = "";
        arrayOfBrowseMovies.forEach(singleIteration => {
          uiObject.displayBrowsedMovies(singleIteration);
        });
      } else if (browseMoviesContainer.innerHTML === "") {
        arrayOfBrowseMovies.forEach(singleIteration => {
          uiObject.displayBrowsedMovies(singleIteration);
          console.log(singleIteration);
        });
      } else {
      }
    });
  e.preventDefault();
});

//keyup movies suggestions
let keyupInputvalue = document.getElementById("searchMovies");
keyupInputvalue.addEventListener("keyup", e => {
  if (document.getElementById("searchMovies").value !== "") {
    document.getElementById("keyupMoviesSuggestion").innerHTML = "";
    browseMoviesApiObj
      .gettingDataFromYts(keyupInputvalue.value)
      .then(response =>
        response.yts_response.data.movies.slice(0, 4).map(result => {
          uiObject.keyupMoviesSuggestion(result);
        })
      );
  } else if (document.getElementById("searchMovies").value !== "") {
    document.getElementById("keyupMoviesSuggestion").innerHTML = "";
  }
});

//when the form1 is submited on the browseMovies page

const searchFormBrowseMovies = document.getElementById("searchform");
// creating the event listner on the input field
searchFormBrowseMovies.addEventListener("submit", e => {
  let inputvalue = document.getElementById("searchMovies").value;
  browseMoviesApiObj.gettingDataFromYts(inputvalue).then(response => {
    //displaying the movies on the screen

    //when the search field is  empty
    if (document.getElementById("searchMovies").value === "") {
      uiObject.whenNoResultFoundBrowseMovies();
      // uiObject.clearingTheAlertBrowseMovies();
      browseMoviesApiObj.gettingDataForHomePage().then(response => {
        //storing the array of images in the variable array
        const arrayOfMovies = response.yts_home_response.data.movies;
        //getting the images/year/and names of the movies on the home page to display
        arrayOfMovies.forEach(singleIteration => {
          uiObject.displayMoviesONBrowseHomePage(singleIteration);
          console.log(singleIteration.title_english);
        });
      });
    }

    //when no result found
    else if (response.yts_response.data.movie_count == 0) {
      uiObject.whenNoResultFound();
      //clearing the alert
      uiObject.clearingTheAlert();
    }
    //when there are results for the search
    else if (response.yts_response.data.movie_count > 0) {
      document.getElementById("browseMovies").innerHTML = "";
      const searchMoviesArray = response.yts_response.data.movies;

      searchMoviesArray.forEach(singleIteration => {
        uiObject.browseMoviesForm1(singleIteration);
      });
    }
  });
  e.preventDefault();
});
