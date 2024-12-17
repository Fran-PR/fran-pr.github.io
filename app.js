const URL='https://fran-pr.github.io/movies-250.json';

function processMovie(data) {
    const peliculas=data.movies;
    //Recorremos con bucle for tradicional
    for(let i=0; i<peliculas.length;i++){
        console.log("Duration:"+peliculas[i].Runtime);

    }

    //Recorremos  bucle for-of
    for(pelicula of peliculas){
        //console.log("Director:"+peliculas.Director);

    }

    //Bucle forEach
    peliculas.forEach(pelicula => {
        console.log(pelicula.Title);
    });

    //For in, es para recorrer objetos
    for(atributo in peliculas[0]){
        
    }


}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);