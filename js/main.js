const movieBox = document.getElementById("movie-container");
const moviePoster = document.getElementById("poster-movie");
const movieTitle = document.getElementById("title-movie");
const movieDescription = document.getElementById("description-movie");
const btnController = document.getElementById("btn-controller");
let movieID = 0;

function main() {
  btnController.addEventListener("click", () => {
    function generateNumber() {
      movieID += Math.floor(Math.random() * 999);
    }
    generateNumber();
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=284255dfe1f4a024f1acf566b5342314`
    ).then((res) => {
      if (res.ok == true && res.status == 200) {
        res.json().then((data) => {
          let { original_title, overview, poster_path } = data;
          movieBox.style.display = "flex";
          moviePoster.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/original${poster_path}`
          );
          movieTitle.textContent = original_title;
          movieDescription.textContent = overview;
        });
      } else if (res.ok == false && res.status == 404) {
        movieBox.style.display = "flex";
        moviePoster.setAttribute("src", "./assets/poster.png");
        movieTitle.textContent = `Ops, today is not the day to watch the movie, let's coding! 🚀`;
        movieDescription.textContent = "";
      }
    });
  });
}
main();
