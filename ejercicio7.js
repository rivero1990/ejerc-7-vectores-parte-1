const listaTitulos = document.querySelector("#contenedor-titulos");
const numeros = [1, 2, 3, 4, 5, 6];
const TITULOS = "River Plate";

for (let i = 0; i < numeros.length; i++) {
    listaTitulos.innerHTML += `<h2>${TITULOS}</h2>`;
}