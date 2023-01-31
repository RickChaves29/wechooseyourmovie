const movieBox = document.getElementById("movie-container");
const movieLoader = document.getElementById("loader");
const moviePoster = document.getElementById("poster-movie");
const movieTitle = document.getElementById("title-movie");
const movieDescription = document.getElementById("description-movie");
const btnController = document.getElementById("btn-controller");
function requestData() {
  fetch(
    "https://olwoovx6yiwwh2glksusdjonmm0etxcd.lambda-url.us-east-2.on.aws/"
  ).then((res) => {
    if (res.ok == true && res.status == 200) {
      res.json().then((data) => {
        console.log(data);
        let { title, description, poster } = data;
        movieLoader.style.display = "none";
        moviePoster.style.display = "block";
        moviePoster.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/original${poster}`
        );
        movieTitle.textContent = title;
        movieDescription.textContent = description;
      });
    } else if (res.ok == false && res.status == 404) {
      movieLoader.style.display = "none";
      moviePoster.style.display = "block";
      moviePoster.setAttribute("src", "./assets/poster.png");
      movieTitle.textContent = `Ops, today is not the day to watch the movie, let's coding! 🚀`;
      movieDescription.textContent = "";
    }
  });
}
function main() {
  btnController.addEventListener("click", () => {
    movieBox.style.display = "flex";
    movieLoader.style.display = "block";
    moviePoster.style.display = "none";
    movieTitle.textContent = "";
    movieDescription.textContent = "";
    setTimeout(requestData, 300);
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceWorker.js", {
        scope: ".",
      })
      .then((register) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          register.scope
        );
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}
main();
