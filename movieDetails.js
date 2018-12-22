const api = new YtsApi();
const ytsui = new yts_ui();
const searchMovies = document.getElementById("searchMovies");
const theMovieDbContainer = document.getElementById("themoviedbcontainer");
searchMovies.addEventListener("keyup", function() {
  //   const inputValue = document.getElementById("searchmovies").value;
  if (searchMovies.value !== "") {
    theMovieDbContainer.innerHTML = "";

    api.themovieDBapi(searchMovies.value).then(response => {
      console.log(response);
      const moviesArray = response.theMovieDbresponse.results;
      console.log(moviesArray);
      if (moviesArray.length === 0) {
        theMovieDbContainer.innerHTML = `<div class='container text-center'>
        <div style='background-color:rgba(0,0,0,05)'>
          <h1 class='text-danger text-center'>No Result Found</h1>;
          </div>
          </div>
          `;
      } else {
        // ytsui.theMovieDBdetails(moviesArray);
        moviesArray.map(movie => {
          ytsui.theMovieDBdetails(movie);
        });
      }
    });
  } else if (searchMovies.value === "") {
    theMovieDbContainer.innerHTML = "";
  }
});
