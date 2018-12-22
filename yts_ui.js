// api class object
class yts_ui {
  constructor() {
    this.moviesContainer = document.getElementById("moviesDiv");
    this.browseMovies = document.getElementById("browseMovies");
    this.containerDivforDownloadMovies = document.getElementById(
      "containerDivforDownloadMovies"
    );
    this.bodyOfDownLoadMovies = document.getElementById("bodyOfDownLoadMovies");
    this.downloadBody = document.getElementById("bodyOfDownLoadMovies");
    this.containerForTrailer = document.getElementById("movieTrailer");
    this.containerCast = document.getElementById("containerCast");
    this.nextPageContainer = document.getElementById("nextPage");
    this.containerForMovieSuggestions = document.getElementById(
      "containerForMovieSuggestions"
    );
    this.keyupMoviesSuggestionContainer = document.getElementById(
      "keyupMoviesSuggestion"
    );
    this.themoviedbcontainer = document.getElementById("themoviedbcontainer");
  }
  keyupMoviesSuggestion(keyupMovies) {
    this.keyupMoviesSuggestionContainer.innerHTML += `
     <div class="container-fluid keyUpMovies" id="myModal">
     <div class="row" style="background-color:rgba(0,0,0,0.5)" id="row">
     <a href="downloadMovie.html?${keyupMovies.title_english}=${
      keyupMovies.id
    }"  id="movie_id" style="text-decoration:none">
    <table>
    <tr>
    <td>
    <img class="img-fluid" src="${
      keyupMovies.small_cover_image
    }" style="border-style:groove;border-color:green;border-width:5px"></img>
    </td>
    <td>
    <p class="text-light" style="font-size:10px">${keyupMovies.title_english.slice(
      0,
      15
    )}..</p>
    <p class="text-light" style="font-size:10px">${keyupMovies.year}</p>
    </td>
    </tr>
    </table>
    <div class="card"></div>
    </a>
    </div>
    </div>     
      
 `;
    const modal = document.getElementById("myModal");

    window.addEventListener("click", event => {
      if (event.target != modal && event.target.parentNode != modal) {
        document.getElementById("keyupMoviesSuggestion").innerHTML = "";
      }
    });
  }

  clearingTheInput() {
    //clearing the inputField
    document.getElementById("searchMovies").value = "";
  }

  //displaying movies on the homePage
  displayMoviesOnHomePage(displayHomePageMovies) {
    this.moviesContainer.innerHTML += `     
    <div class="container">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs1-8 col-xs-12 float-left">
      <a href="downloadMovie.html?${displayHomePageMovies.title_english}=${
      displayHomePageMovies.id
    }"  style="text-decoration:none"  title="${
      displayHomePageMovies.title_english
    }">
        <div class="poster-image border">
          <img
            src="${displayHomePageMovies.large_cover_image}"
            style="width:100%;height:300px;border-style:solid;border-width:5px;"
          />
        </div>
            <h6 class="text-light">${displayHomePageMovies.title_english.slice(
              0,
              20
            )}</h6>
           <p class="text-light">${displayHomePageMovies.year} </p>
           </a>
      </div>
      </div>

    `;
  }
  //displaying movies on the page of browse movies before submition
  displayMoviesONBrowseHomePage(displayHomePageMovies) {
    this.browseMovies.innerHTML += `
    <div class="container">
      <div class="col-sm-3 mb-3 float-left">
      <a href="downloadMovie.html?${displayHomePageMovies.title_english}=${
      displayHomePageMovies.id
    }"  style="text-decoration:none"  title="${
      displayHomePageMovies.title_english
    }">
        <div class="poster-image border">
          <img
            src="${displayHomePageMovies.large_cover_image}"
            style="width:100%;height:300px;border-style:solid;border-width:5px;"
          />
        </div>
            <h6 class="text-light">${displayHomePageMovies.title_english.slice(
              0,
              20
            )}</h6>
           <p class="text-light">${displayHomePageMovies.year} </p>
           </a>
      </div>
      </div>
    `;
  }

  //browsing next page movies on the browse movies page
  async browseNextPageMovies() {
    this.nextPageContainer.innerHTML = `<div class="container col-sm-3 mt-5 mb-4">   
    <div>
    <table class="text-center">
    <tr>
    <td>
  <button class="btn text-success btn-sx"  type="button" style="background-color:rgba(0, 0, 0, 0.5);border-color:grey;
  " value="1">1</button>
    </td>
    <td>
   <button class="btn text-success btn-sx" type="button" style="background-color:rgba(0, 0, 0, 0.5);border-color:grey;
   " value="2">2</button>
    </td>
    
    <td>
   <button class="btn text-success btn-sx" type="button" style="background-color:rgba(0, 0, 0, 0.5);border-color:grey;
   " value="3">3</button>
    </td>
    <td>
   <button class="btn text-success btn-sx" type="button" style="background-color:rgba(0, 0, 0, 0.5);border-color:grey;
   ">....</button>
    </td>
    <td>
   <button class="btn text-success btn-sx" type="button" style="background-color:rgba(0, 0, 0, 0.5);border-color:grey;
   " id="nextBtn" value="1">next..</button>
    </td>
    
    </tr>
    </table>
    </div>
    
    </div>`;

    //this will return the button value
    $("button").click(function() {
      var fired_button = $(this).val();

      console.log(fired_button);
    });
  }

  //display the movies after submitting the form1
  displayMovies(displayMovieImage) {
    this.moviesContainer.innerHTML += `
    <div class="container">
      <div class="col-sm-3 mb-3 float-left">
      <a href="downloadMovie.html?${displayMovieImage.title_english}=${
      displayMovieImage.id
    }"  style="text-decoration:none"  title="${
      displayMovieImage.title_english
    }">
        <div class="poster-image border">
          <img
            src="${displayMovieImage.large_cover_image}"
            style="width:100%;height:300px;border-style:solid;border-width:5px;"
          />
        </div>
            <h6 class="text-light">${displayMovieImage.title_english.slice(
              0,
              20
            )}</h6>
           <p class="text-light">${displayMovieImage.year} </p>
           </a>
      </div>
      </div>
     `;
  }
  //display/browse the movies after submitting the form2
  displayBrowsedMovies(displayBrowsedMovies) {
    this.browseMovies.innerHTML += `
    <div class="container">
    <div class="col-sm-3 mb-3 float-left">
    <a href="downloadMovie.html?${displayBrowsedMovies.title_english}=${
      displayBrowsedMovies.id
    }"  style="text-decoration:none"  title="${
      displayBrowsedMovies.title_english
    }">
      <div class="poster-image border">
        <img
          src="${displayBrowsedMovies.large_cover_image}"
          style="width:100%;height:300px;border-style:solid;border-width:5px;"
        />
      </div>
          <h6 class="text-light">${displayBrowsedMovies.title_english.slice(
            0,
            20
          )}</h6>
         <p class="text-light">${displayBrowsedMovies.year} </p>
         </a>
    </div>
    </div>
        `;
  }
  //displaying movie details when click for downloading
  displayMoviesDetails(displayMovieDetails) {
    this.downloadBody.style.backgroundImage = `url('${
      displayMovieDetails.background_image_original
    }')`;
    this.containerDivforDownloadMovies.innerHTML = `
    <div class="mt-4 container">
    <div class="row">
     <div class ="col-sm-4">
     <div class="col-sm-12">
     <img class ="img-fluid  mt-2 mb-2" src="${
       displayMovieDetails.large_cover_image
     }" style="border-radius:10px;border-style:solid; max-width:100%" title="${
      displayMovieDetails.title_english
    }">
     </div>
     <div class="container-fluid">
  <button type="button" class="btn btn-success btn-block mt-3" data-toggle="modal" data-target="#myModal" title="click for details">&DownArrowBar;Download</button>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header ">
        <p class="text-center">select movie quality</p>
          <button type="button" class="close" data-dismiss="modal" title="close">&times;</button>
        </div>
        ${displayMovieDetails.torrents.map(
          torrenUrl =>
            `<div class="container">
            <div class="modal-body">
            <div  style="float:left" class="col-sm-12">
                <div class="bg-secondary text-center text-light">
                  
                   <p class="text-light">Quality: ${torrenUrl.quality}</p>
                   <p class="text-light">Size: ${torrenUrl.size}</p>
                   <p class="text-light">Peers: ${torrenUrl.peers}</p>
                   <p class="text-light">Seeders: ${torrenUrl.seeds}</p>
                </div>
                <div class="btn btn-block btn-success text-light" title="click to download"> 
                  <a href="${
                    torrenUrl.url
                  }" class="text-light" style="text-decoration:none">&DownArrowBar; download
                   </a>
                   </div>
                </div>
            </div>
          </div>`
        )}
        
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" title="close">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>   
    </div> 
    <div class="col-sm-8">
    <span>
    <h1 class="text-light ml-5">
       ${displayMovieDetails.title_english}
    </h1>
    <h4 class="text-light ml-5">${displayMovieDetails.year}
    </h4>
    <h4 class="ml-5 text-light">${displayMovieDetails.genres.map(
      genre => `<span class="text-light">${genre}/</span>`
    )}</h4>
    <span class="ml-5 text-light">Available in: ${displayMovieDetails.torrents.map(
      quality =>
        `<apan class="badge bg-success btn text-light" title="quality">${
          quality.quality
        }
        </apan>`
    )}</span>
    </span>

<div class="ml-5 ">
<span>

<h1 class="text-danger" title="likes">&hearts;${displayMovieDetails.like_count}
</h1>
</span>
<table>
<tr>
<td>
<p class="text-secondary badge bg-warning" title="total downloads">Total Downloads &DownArrowBar;:  </p>
</td>
<td>
<h6 class="text-success" >${displayMovieDetails.download_count}</h6>
</td>
</tr>
</table>
<table>
<tr>
<td>
<p class="badge bg-warning text-secondary" title="IMDB Rating">IMDB</p>

</td>
<td>
<h6 class="text-light" >${displayMovieDetails.rating}</h6>
<td>
<td><p class="text-success">&starf;</p>
</td>
</tr>
<tr>
<td>
<p class="badge bg-warning text-secondary" title="language">Language</p>

</td>
<td>
<h6 class="text-light" >${displayMovieDetails.language}</h6>
</td>
</tr>
</table>
</div>

    </div>
  
    </div>
    
    </div>     


     `;
  }
  //movie suggestions div
  movieSuggestionsUI(idForMovieSuggestions) {
    this.containerForMovieSuggestions.innerHTML += `
    <div class="mt-4 container">
    <h4 class="text-light lead">Similar Movies</h4>

    <div class="row">
    ${idForMovieSuggestions.map(
      movieSuggestionImages => `
      
    <div class ="col-sm-4">
    <a href="downloadMovie.html?${movieSuggestionImages.title_english}=${
        movieSuggestionImages.id
      }"  id="movie_id">
     <img class="img-fluid mt-2 mb-2" style="border-style:groove;height:auto max-width:100%;border-width:7px;" src="${
       movieSuggestionImages.medium_cover_image
     }" style="border-radius:10px;border-style:groove;height:auto max-width:100%" title="${
        movieSuggestionImages.title_english
      }">
     </a>
   
    </div>
    `
    )}
     
    </div>
    </div>
    `;
  }
  //div for movie trailer
  movieTrailer(movieTrailer) {
    this.containerForTrailer.innerHTML += `
    <div class="mt-4 mb-4"> 
    <div class=" col-sm-4 float-left mb-4">
    <img class="img-fluid" src="${movieTrailer.medium_screenshot_image1}"></img>
    </div>
    <div class="col-sm-4 float-left">
    <img class="img-fluid" src="${movieTrailer.medium_screenshot_image2}"></img>
    </div>
    <div class="col-sm-4 float-left">
    <img class="img-fluid" src="${movieTrailer.medium_screenshot_image3}"></img>
    
    </div>
    </div>
    <div class="mb-5 mt-5">
    <iframe allowfullscreen class="col-sm-12" style="height:500px" src="https://www.youtube.com/embed/${
      movieTrailer.yt_trailer_code
    }?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3" id="ytVideo">
    </iframe>
    </div>

    `;
    this.containerCast.innerHTML += `
    <div class="container mb-4">
    <div class="row">
    <div class="col-sm-4">
    <h2 class="text-light">cast:</h2>
    </br>
    ${movieTrailer.cast.map(
      cast => ` 
      <div class="castDiv" >
      <table>
      <tr>
      <td>
<img class="img-fluid bg-dark" src="${
        cast.url_small_image
      }" style="border-radius:50%" title="${cast.name}"></img>
      </td>
      <td>
      <div>
      <a href="https://en.wikipedia.org/wiki/${
        cast.name
      }" target="_blank" style="text-decoration:none" class="text-secondary">
      <h6 class="text-secondary">${
        cast.name
      }</a> As</h6>  <h5 class="text-light">${cast.character_name}</h5></div>

      </td>
      </tr>
      </table>
</div>
<div class="card text-secondary"></div>

      `
    )}
     </div>
     <div class="col-sm-8">
     <div class="mt-5 ml-5">   
     <h2 class="text-light">Description:</h2>
     <p class="text-secondary lead" style="font-size:14px">     ${
       movieTrailer.description_full
     }
     </p>
     </div>
     </div>
     </div>
    </div>
    `;
  }
  //when form1 is subitted on the browse movies page
  browseMoviesForm1(browseMoviesForm1) {
    this.browseMovies.innerHTML += `
    <div class"container mt-4">
    <div class ="col-sm-2 mb-4" style="float:left">
    <a href="downloadMovie.html?${browseMoviesForm1.title_english}=${
      browseMoviesForm1.id
    }"  id="movie_id" style="text-decoration:none">
    <img class ="img-fluid mt-2 mb-2" src="${
      browseMoviesForm1.large_cover_image
    }" style="border-style:groove;height:auto max-width:100%;border-width:7px;" title="${
      browseMoviesForm1.title_english
    }">
    <h6 class="text-light">${browseMoviesForm1.title_english}</h6>
    <h6 class="text-light">${browseMoviesForm1.year}</h6>
    </a>
    

    </div>
    </div>
    `;
  }
  //when form1 is submitted on the download movies
  downloadMoviesForm1(downloadMoviesForm1) {
    this.containerDivforDownloadMovies.innerHTML += `
    <div class"container mt-4">
    <div class ="col-sm-3" style="float:left">
    <a href="downloadMovie.html?${downloadMoviesForm1.title_english}=${
      downloadMoviesForm1.id
    }"  id="movie_id" style="text-decoration:none">
    <img class ="img-fluid mt-2 mb-2" src="${
      downloadMoviesForm1.large_cover_image
    }"style="border-style:groove;height:auto max-width:100%;border-width:7px;" title="${
      downloadMoviesForm1.title_english
    }">
    <h6 class="text-light">${downloadMoviesForm1.title_english}</h6>
    <h6 class="text-light">${downloadMoviesForm1.year}</h6>
    </a>
    

    </div>
    </div>
    `;
  }
  //movies details from the themovieDB api
  theMovieDBdetails(movieDbdetails) {
    this.themoviedbcontainer.innerHTML += `
    <div class="container">
    <div class="row">
      <div class="col-sm-3 mb-3 float-left">
      
        <div class="poster-image border">
          <img
            src="https://image.tmdb.org/t/p/w185${movieDbdetails.poster_path}"
            style="width:100%;height:300px;border-style:solid;border-width:5px;"
          />
        </div>
        <a href="https://www.themoviedb.org/movie/${
          movieDbdetails.id
        }"  style="text-decoration:none"  title="">
      <button class="btn btn-block btn-success mt-2 mb-2">View Details</button>
           </a>
      </div>
      <div class="col-sm-6">
      
      <h6 class="text-light">${movieDbdetails.title}</h6>
      
      <p class="text-secondary">${movieDbdetails.overview} </p>
      
      <p class="badge bg-warning">Release Date : ${
        movieDbdetails.release_date
      }</p>
      </br>
      
      <p class="badge bg-warning">language : ${
        movieDbdetails.original_language
      }</p>
      
      </div>
      </div>
      </div>
    `;
  }

  //warning  on the brows movies page
  whenNoResultFoundBrowseMovies() {
    this.browseMovies.innerHTML = `<div class ="card card-body " style="background-color:#1D1D1D">
  <span class="text-danger text-center">
  <strong> No Result Found for this Search  </strong>
  </span>
    `;
  }
  //clearing the alert message
  clearingTheAlertBrowseMovies() {
    setTimeout(() => {
      this.browseMovies.innerHTML = "";
    }, 3000);
  }

  whenNoResultFound() {
    this.moviesContainer.innerHTML = `<div class ="card card-body " style="background-color:#1D1D1D">
  <span class="text-danger text-center">
  <strong> No Result Found for this Search  </strong>
  </span>
    `;
  }
  //clearing the alert message
  clearingTheAlert() {
    setTimeout(() => {
      this.moviesContainer.innerHTML = "";
    }, 3000);
  }
}

//display movies on home page before searching

// <div class="container">
//     <div class="row">
//    <div class="col-lg-3 col-sm-6" >
//    <div class="poster-image border" style="float-right">
//  <img class="img-fluid mt-2 mb-2" style="width:100%;height:300px;"
//  " src="${displayHomePageMovies.large_cover_image}" title="${
//       displayHomePageMovies.title_english
//     }">
//  </img>
//  </div>
//    <a href="downloadMovie.html?${displayHomePageMovies.title_english}=${
//       displayHomePageMovies.id
//     }"  style="text-decoration:none">

//  <h6 class="text-light">${displayHomePageMovies.title_english.slice(0, 20)}</h6>
// <p class="text-light">${displayHomePageMovies.year} </p>
// </a>
//    </div>
//    </div>
//     </div>

//display movies on browse home page

// <div class="container mt-4">

//     <div class="col-sm-3 float-left">
//     <div class="col-sm-12">
//     <a href="downloadMovie.html?${displayHomePageMovies.title_english}=${
//        displayHomePageMovies.id
//      }"  id="movie_id" style="text-decoration:none">   <img class="img-fluid mt-2 mb-2" style="border-style:groove;height:auto max-width:100%;border-width:7px" src="${
//        displayHomePageMovies.large_cover_image
//      }" title="${displayHomePageMovies.title_english}">
//     </img>
//     <h6 class="text-light">${displayHomePageMovies.title_english.slice(
//       0,
//       20
//     )}..</h6>
//     <span class="text-light">${displayHomePageMovies.year}</span>
//     </a>
//     </div>

//     </div>
//      </div>
