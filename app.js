const URL='https://fran-pr.github.io/movies-250.json';

function processMovie(data) {
    console.log(data);
}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);