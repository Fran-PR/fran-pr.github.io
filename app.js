const URL='https://fran-pr.github.io/movies-250.json';

function processMovie(data) {
    const peliculas=data.movies;
    peliculas.array.forEach(pelicula => {
        console.log(pelicula.Title);
    });
}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);