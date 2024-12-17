const URL='https://fran-pr.github.io/movies-250.json';


//funcion para generar fichas nuevas
function generateCard(pelicula){
    //Creacion de la card
    const newCard= document.createElement('div');//esto nos cre un elemento de tipo div
    //Img
    const newImg =document.createElement("img");//creamos elemento img
    newImg.setAttribute("src", peliculaPoster);//le añadimos el atributo src
    newImg.setAttribute("alt", `Poster de la pelicula ${pelicula.Title}`);
    newCard.appendChild(newImg);//agregamos la imagen a la card

    document.querySelector("#divFichas").appendChild(newCard);//le agregamos el div al contenedor

}

function processMovie(data) {
    const peliculas=data.movies;

}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);