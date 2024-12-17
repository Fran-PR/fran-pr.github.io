const URL='https://fran-pr.github.io/movies-250.json';


//funcion para generar fichas nuevas
function generateCard(pelicula){
    const newCard= document.createElement('div');//esto nos cre un elemento de tipo div
    document.querySelector("#divFichas").appendChild(newCard);//le agregamos el div al contenedor
    
}

function processMovie(data) {
    const peliculas=data.movies;
    



}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);