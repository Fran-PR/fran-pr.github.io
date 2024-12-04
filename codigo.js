
//funcion para ocultar peliculas
function ocultarPeliculas() {
    //1. Hacer desaparecer todas las películas
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "None";
    });
}
//esto es para hacer un filterro
var tipo = "";
var genero="";

document.querySelector("#btn-byn").addEventListener("click", () => {
    tipo = ".byn";
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".byn").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});

document.querySelector("#btn-muda").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".muda").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});

document.querySelector("#btn-color").addEventListener("click", () => {
    tipo = ".color";
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".color").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});

document.querySelector("#btn-todos").addEventListener("click", () => {
  
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});


//codigo para usar un selector en js
/*
document.querySelector("#genre").addEventListener("change",()=>{
    ocultarPeliculas();
    //con esto creamos una variable que nos guarda el valor seleccionado en el desplegable
    let filmGenre=document.querySelector("#genre").value;
    //le decimos que nos seleccione la clase con la variable + .
    document.querySelectorAll("."+filmGenre).forEach((pelicula)=>{
        //y que las muestre
        pelicula.style.display="Block";
    })

});
*/
document.querySelector("#genre").addEventListener("change",()=>{
    ocultarPeliculas();
    //con esto creamos una variable que nos guarda el valor seleccionado en el desplegable
    let filmGenre=document.querySelector("#genre").value;
    //le decimos que nos seleccione la clase con la variable + .
    document.querySelectorAll("."+filmGenre+tipo).forEach((pelicula)=>{
        //y que las muestre
        pelicula.style.display="Block";
    })

});

document.querySelector("#btn-search").addEventListener("click", () => {
    ocultarPeliculas();
    document.querySelectorAll(tipo+"."+filmGenre).forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});