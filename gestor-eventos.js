
document.querySelector("#btnTitle").addEventListener("click",()=>{
    console.log("Prueba de boton");
    const textoBusqueda=document.querySelector("#txtTitle").value;
    const peliculasFiltradas=peliculas.filter(pelicula=>pelicula.Title.includes(textoBusqueda));
   
    peliculasFiltradas.forEach(pFilt => {
     console.log(pFilt.Title)
        
    });
})