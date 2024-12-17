const URL = 'https://fran-pr.github.io/movies-250.json';


//funcion para generar fichas nuevas
/*
function generateCard(pelicula) {
    //Creacion de la card
    const newCard = document.createElement('div');//esto nos cre un elemento de tipo div
    newCard.setAttribute("class", "card");
    
    const newImg = document.createElement("img");//creamos elemento img
    newImg.setAttribute("src", peliculaPoster);//le añadimos el atributo src
    newImg.setAttribute("alt", `Poster de la pelicula ${pelicula.Title}`);
    newCard.appendChild(newImg);//agregamos la imagen a la card
    document.querySelector('#divFichas').appendChild(newCard);//le agregamos el div al contenedor

}
    */

function generateCard(pelicula) {
    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class", "card");
    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class", "card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //5. Crear el director <p><strong>Director:</strong> Francis Ford Coppola</p>
    const nuevoParrafoDirector = document.createElement("p");
    const directorBold = document.createElement("strong");
    nuevoParrafoDirector.appendChild(directorBold);
    directorBold.textContent = "Director: ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director)
    nuevoParrafoDirector.appendChild(textoDirector);

    //6.Añadir Año
    const nuevoParrafoAnno = document.createElement("p");
    const annoBold = document.createElement("strong");
    nuevoParrafoAnno.appendChild(annoBold);
    annoBold.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnno);
    const textoAnno = document.createTextNode(pelicula.Year)
    nuevoParrafoAnno.appendChild(annoBold);
    nuevoParrafoAnno.appendChild(annoBold);
    annoBold.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnno);
    nuevoParrafoAnno.appendChild(textoAnno);

    //7.Añadir Genero
    const nuevoParrafoGenre= document.createElement("p");
    const genreBold = document.createElement("strong");
    nuevoParrafoGenre.appendChild(genreBold);
    genreBold.textContent = "Genero: ";
    nuevoContenido.appendChild(nuevoParrafoGenre);
    const textoGenre= document.createTextNode(pelicula.Genre)
    nuevoParrafoGenre.appendChild(textoGenre);
    


    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#divFichas").appendChild(nuevaCard);//Agregamos el div al contenedor
}

//declaramos la variable fuera de la funcion para que el ambito sea global
let peliculas;
function processMovie(data) {
    peliculas = data.movies;//la inicializamos aqui

    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });

}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}
//esta funcion viene de myhttp.js
doGetRequest(URL, processMovie);