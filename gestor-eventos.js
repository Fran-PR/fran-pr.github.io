
document.querySelector("#btnTitle").addEventListener("click",()=>{
    clearCards()
    const textoBusqueda=document.querySelector("#txtTitle").value;

    const peliculasFiltradas=peliculas.filter(
        pelicula=>pelicula.Title
        .toUppeCase()
        .includes(textoBusqueda)
        .trim()
        .toUpperCase());

    console.log(peliculasFiltradas);

    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);

    });


    //busqueda por actor, genero y orden

})