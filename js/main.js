const requestMovie = fetch(
  `https://api.themoviedb.org/3/movie/76341?api_key=284255dfe1f4a024f1acf566b5342314"`
);
const movieBox = document.getElementById("movie-container");
const moviePoster = document.getElementById("poster-movie");
const movieTitle = document.getElementById("title-movie");
const movieDescription = document.getElementById("description-movie");
function main() {
  requestMovie.then((res) =>
    res.json().then((data) => {
      let { original_title, overview, poster_path } = data;

      console.log(data);
      console.log(original_title);
      console.log(overview);
      console.log(poster_path);
      movieBox.style.display = "flex";
      moviePoster.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/original${poster_path}`
      );
      movieTitle.textContent = original_title;
      movieDescription.textContent = overview;
    })
  );
}
main();
