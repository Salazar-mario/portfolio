// Obtener el elemento del título
var tituloMaquina = document.getElementById('titulo-maquina');

// Obtener el texto del título
var textoTitulo = tituloMaquina.innerText;

// Limpiar el texto del título
tituloMaquina.innerText = '';

// Variable para almacenar la posición actual del texto
var posicion = 0;

// Función para simular el efecto de escritura
function escribirTexto() {
    // Obtener un fragmento del texto actual
    var fragmento = textoTitulo.slice(0, posicion);

    // Establecer el fragmento como contenido del título
    tituloMaquina.innerText = fragmento;

    // Incrementar la posición
    posicion++;

    // Comprobar si se ha llegado al final del texto
    if (posicion <= textoTitulo.length) {
        // Esperar un tiempo antes de escribir el siguiente carácter
        setTimeout(escribirTexto, 90);
    }
}

// Llamar a la función para iniciar el efecto de escritura
escribirTexto();
