//busqueda por Titulo
document.querySelector("#btnTitle").addEventListener("click", () => {
    clearCards()
    const textoBusqueda = document.querySelector("#txtTitle").value;
    const peliculasFiltradas = peliculas.filter(
        pelicula => pelicula.Title
            .toUpperCase()
            .includes(textoBusqueda.trim().toUpperCase())
    );
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });



})

//busqueda por actor
document.querySelector("#btnActor").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#txtActor").value;

    const peliculasFiltradas = peliculas.filter(
        pelicula => pelicula.Actors
            .toUpperCase()
            .includes(textoBusqueda.trim().toUpperCase())
    );
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });

})

//busqueda por genero
document.querySelector("#btnGenre").addEventListener("click", () => {
    const selectElement = document.getElementById("selGenre");

    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('Valor seleccionado:', selectedValue);

        // Aquí puedes hacer algo con el valor seleccionado
    });

    const peliculasFiltradas = peliculas.filter(
        pelicula => pelicula.Genre
            .toUpperCase()
            .includes(selectedValue.trim().toUpperCase())
    );
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
})

//activar orden ascedente y descendente

