


const elementosLista = document.querySelectorAll("#miLista li");
let contador = 1;

function actualizarLista() {
    elementosLista.forEach((elemento, indice) => {
        elemento.textContent = `Cambio ${contador} en Elemento ${indice + 1}`;
    });
    contador++;
}

setInterval(actualizarLista, 500);
