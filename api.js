//getting the api from YTS

class YtsApi {
  //setting the API to display the movies when the page is loaded for the first time
  async gettingDataForHomePage(pageNumber) {
    const yts_home = await fetch(
      `https://yts.am/api/v2/list_movies.json?limit=20&page=${pageNumber}`
    );
    const yts_home_response = await yts_home.json();
    return {
      yts_home_response
    };
  }

  //setting the API when the user's search for the particular movie
  async gettingDataFromYts(searchMovie) {
    const yts_api = await fetch(`https://yts.am/api/v2/list_movies.json?query_term=${searchMovie}
    `);
    const yts_response = await yts_api.json();
    return {
      yts_response
    };
  }
  //API for browsing movies by there rating,genere,quality and order
  async browseMovies(movieInput, quality, genre, minimum_rating, sort_by) {
    const browseMoviesReq = await fetch(
      `https://yts.am/api/v2/list_movies.json?query_term=${movieInput}&quality=${quality}&genre=${genre}&minimum_rating=${minimum_rating}&sort_by=${sort_by}`
    );
    const browseMoviesRes = await browseMoviesReq.json();
    return {
      browseMoviesRes
    };
  }
  //API for movie details
  async movieDetails(movie_id) {
    const movieDetails = await fetch(
      `https://yts.am/api/v2/movie_details.json?movie_id=${movie_id}&with_cast=true&with_images=true`
    );
    const movieDetailsResponse = await movieDetails.json();
    return {
      movieDetailsResponse
    };
  }
  //API for movie suggestions
  async movieSuggestions(movieId) {
    const movieSuggestions = await fetch(
      `https://yts.am/api/v2/movie_suggestions.json?movie_id=${movieId}`
    );
    const movieSuggestionResponse = await movieSuggestions.json();
    return {
      movieSuggestionResponse
    };
  }
}
