
document.querySelector("#btnTitle").addEventListener("click",()=>{
    console.log("Prueba de boton");
    //clearCards()
    const textoBusqueda=document.querySelector("#txtTitle").value;
    const peliculasFiltradas=peliculas.filter(
        pelicula=>pelicula.Title
        .toUppeCase()
        .includes(textoBusqueda)
        .trim()
        .toUpperCase());
   
    peliculasFiltradas.forEach(pFilt => {
        generateCard(pelicula);

    });


    //busqueda por actor, genero y orden
    
})